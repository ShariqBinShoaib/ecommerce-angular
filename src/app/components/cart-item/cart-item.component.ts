import { Component, Input } from '@angular/core';
import { CartService, CartProduct } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartProduct: CartProduct;

  constructor(private cartService: CartService) {}

  handleDelete() {
    if (this.cartProduct) this.cartService.deleteCartItem(this.cartProduct);
  }
}
