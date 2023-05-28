import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartResponse } from 'src/app/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: CartResponse | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('CART PAGE');
    this.cartService.cartData$.subscribe({
      next: (value) => {
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
