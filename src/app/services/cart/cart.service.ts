import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, map, switchMap, of } from 'rxjs';

import {
  CartPayload,
  CartPayloadProduct,
  CartProduct,
  CartResponse,
  GetUserCartResponse,
} from 'src/app/types';
import { AuthService } from '../auth/auth.service';

const cartInitalValues = {
  id: 0,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
};

@Injectable()
export class CartService {
  private cartData: CartResponse = cartInitalValues;

  private cartCountSubject = new Subject<number>();
  private cartDataSubject = new BehaviorSubject<CartResponse>(cartInitalValues);

  cartData$: Observable<CartResponse> = this.cartDataSubject.asObservable();
  cartCount$: Observable<number> = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  setCartData(cart: CartResponse | null) {
    if (cart) {
      this.cartData = {
        id: cart.id,
        userId: cart.userId,
        discountedTotal: this.cartData.discountedTotal + cart.discountedTotal,
        total: this.cartData.total + cart.total,
        totalProducts: this.cartData.totalProducts + cart.totalProducts,
        totalQuantity: this.cartData.totalQuantity + cart.totalQuantity,
        products: [...this.cartData.products, ...cart.products],
      };

      this.cartDataSubject.next(this.cartData);
      this.cartCountSubject.next(this.cartData.totalQuantity);
    } else {
      this.cartData = cartInitalValues;
      this.cartDataSubject.next(cartInitalValues);
      this.cartCountSubject.next(0);
    }
  }

  addCart(product: CartPayloadProduct) {
    return this.authService.authInfo$.pipe(
      switchMap((value) => {
        if (value) {
          const cart = {
            userId: value.id,
            products: [product],
          };

          return this.http.post<CartResponse>('/carts/add', cart);
        }
        return of(null);
      })
    );
  }

  getUserCarts() {
    return this.authService.authInfo$.pipe(
      switchMap((value) => {
        if (value) {
          return this.http
            .get<GetUserCartResponse>(`/carts/user/${value.id}`)
            .pipe(map((item) => item.carts[0]));
        }
        return of(null);
      })
    );
  }

  deleteCartItem(cartProduct: CartProduct) {
    const filteredProducts = this.cartData.products.filter(
      (product) => product.id !== cartProduct.id
    );

    this.cartData = {
      id: this.cartData.id,
      userId: this.cartData.userId,
      discountedTotal:
        this.cartData.discountedTotal - cartProduct.discountedPrice,
      total: this.cartData.total - cartProduct.total,
      totalProducts: this.cartData.totalProducts - 1,
      totalQuantity: this.cartData.totalQuantity - cartProduct.quantity,
      products: filteredProducts,
    };

    this.cartDataSubject.next(this.cartData);
    this.cartCountSubject.next(this.cartData.totalQuantity);
  }
}
