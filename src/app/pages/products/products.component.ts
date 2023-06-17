import { Component } from '@angular/core';
import { HttpRequestState, Product } from 'src/app/types';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable } from 'rxjs';
import { httpRequestStates } from 'src/app/utils';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  skeletonArray: unknown[] = Array(8);

  constructor(private productService: ProductService) {}

  readonly ptoductsStream$: Observable<HttpRequestState<Product[]>> =
    this.productService.getProducts().pipe(httpRequestStates);
}
