import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const authInfo = this.authService.getAuthInfoFromLocalStorage();

    if (authInfo) {
      this.authService.setAuthInfo(authInfo);
    }
  }
}
