import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartProduct } from 'src/app/types';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartProduct: CartProduct | null = null;

  constructor(private cartService: CartService) {}

  handleDelete() {
    if (this.cartProduct) this.cartService.deleteCartItem(this.cartProduct);
  }
}
