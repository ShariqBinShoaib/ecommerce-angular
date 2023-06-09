import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  ratingArray: unknown[] = [];

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ratingArray = Array(Math.round(this.product?.rating || 0));
  }

  handleAddCart() {
    if (this.authService.isAuthenticated && this.product) {
      this.cartService
        .addCart({ id: this.product.id, quantity: 1 })
        .subscribe((value) => {
          if (value) this.cartService.setCartData(value);
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
