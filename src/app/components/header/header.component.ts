import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  totalCarts: number = 0;
  cartCountSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;

    if (this.isAuthenticated)
      this.cartCountSubscription = this.cartService.cartCount$.subscribe(
        (value) => {
          this.totalCarts = value;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.cartCountSubscription) this.cartCountSubscription.unsubscribe();
    this.totalCarts = 0;
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
