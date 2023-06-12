import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl: string = environment.apiUrl;

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = '';

    this.authService.authInfo$.subscribe((authInfo) => {
      if (authInfo) token = authInfo?.token;
    });

    const modifiedReq = req.clone({
      url: this.baseUrl + req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(modifiedReq);
  }
}
