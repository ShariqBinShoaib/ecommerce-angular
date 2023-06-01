import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/types';

const productInitValues = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: [],
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = productInitValues;
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.loading = true;

      this.productService
        .getProductById(productId)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe({
          next: (res) => {
            this.product = res;
          },
          error: (error) => console.error(error),
        });
    }
  }
}
