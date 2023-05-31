import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GetAllProductsResponse, Product } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<GetAllProductsResponse>('/products')
      .pipe(map((value) => value.products));
  }

  getProductById(productId: string) {
    return this.http.get<Product>(`/products/${productId}`);
  }
}
