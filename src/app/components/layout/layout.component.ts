import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  cartServiceSubscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartServiceSubscription = this.cartService
      .getUserCarts()
      .subscribe((value) => {
        this.cartService.setCartData(value);
      });
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
    this.cartService.setCartData(null);
  }
}
