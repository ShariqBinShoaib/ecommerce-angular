import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GetAllResponse } from '../../types';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface GetAllProductsResponse extends GetAllResponse {
  products: Product[];
}

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
