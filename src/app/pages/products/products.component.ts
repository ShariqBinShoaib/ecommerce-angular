import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ProductService,
  Product,
} from 'src/app/services/product/product.service';
import { HttpRequestState } from 'src/app/types';
import { httpRequestStates } from 'src/app/utils';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  skeletonArray: unknown[] = Array(8);

  constructor(private productService: ProductService) {}

  readonly ptoductsStream$: Observable<HttpRequestState<Product[]>> =
    this.productService.getProducts().pipe(httpRequestStates);
}
