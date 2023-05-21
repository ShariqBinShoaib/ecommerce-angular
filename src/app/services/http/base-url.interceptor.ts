import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl: string = environment.apiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({ url: this.baseUrl + req.url });
    return next.handle(modifiedReq);
  }
}
