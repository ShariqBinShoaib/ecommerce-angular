import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartResponse } from 'src/app/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
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
