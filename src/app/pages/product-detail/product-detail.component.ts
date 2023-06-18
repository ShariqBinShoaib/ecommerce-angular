import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import {
  ProductService,
  Product,
} from 'src/app/services/product/product.service';
import { HttpRequestState } from 'src/app/types';
import { httpRequestStates } from 'src/app/utils';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productStream$: Observable<HttpRequestState<Product>>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productStream$ = this.productService
        .getProductById(productId)
        .pipe(httpRequestStates);
    }
  }
}
