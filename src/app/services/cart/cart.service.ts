import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

import { CartPayload, CartResponse, GetUserCartResponse } from 'src/app/types';

const cartInitalValues = {
  id: 0,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSubject: Subject<number> = new Subject<number>();

  cartData: CartResponse = cartInitalValues;
  cartCount$: Observable<number> = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) {}

  setCartData(cart: CartResponse) {
    this.cartData = {
      id: cart.id,
      userId: cart.userId,
      discountedTotal: this.cartData.discountedTotal + cart.discountedTotal,
      total: this.cartData.total + cart.total,
      totalProducts: this.cartData.totalProducts + cart.totalProducts,
      totalQuantity: this.cartData.totalQuantity + cart.totalQuantity,
      products: [...this.cartData.products, ...cart.products],
    };

    this.cartCountSubject.next(this.cartData.totalQuantity);
  }

  addCart(cart: CartPayload) {
    return this.http.post<CartResponse>('/carts/add', cart);
  }

  getUserCarts(userId: number) {
    return this.http
      .get<GetUserCartResponse>(`/carts/user/${userId}`)
      .pipe(map((item) => item.carts[0]));
  }
}
