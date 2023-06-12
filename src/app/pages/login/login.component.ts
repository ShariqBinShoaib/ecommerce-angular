import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService, LoginPayload } from 'src/app/services/auth/auth.service';
import { BadRequestResponse } from 'src/app/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  error: BadRequestResponse | null = null;

  loginData: LoginPayload = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated) this.router.navigate(['/']);
  }

  handleSubmit() {
    this.loading = true;

    this.authService
      .login(this.loginData)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.authService.saveAuthInfoInLocalStorage(res);
          this.authService.setAuthInfo(res);
          window.location.href = '/';
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.error;
          console.error(err);
        },
      });
  }
}
