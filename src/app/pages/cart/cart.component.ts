import { Component, OnInit } from '@angular/core';
import { CartService, CartResponse } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartSkeleton: unknown[] = Array(3);
  cartData: CartResponse;
  isLoading: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartData$.subscribe({
      next: (value) => {
        this.isLoading = this.cartService.isLoading;
        this.cartData = value;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
