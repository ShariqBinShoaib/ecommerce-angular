import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../types';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | null = null;
  ratingArray: unknown[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.ratingArray = Array(Math.round(this.product?.rating || 0));
  }

  handleAddCart() {
    if (this.product) {
      this.cartService
        .addCart({
          userId: 1,
          products: [{ id: this.product.id, quantity: 1 }],
        })
        .subscribe((value) => {
          this.cartService.setCartData(value);
        });
    }
  }
}
