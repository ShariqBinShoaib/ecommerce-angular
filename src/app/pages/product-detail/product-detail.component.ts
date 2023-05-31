import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/types';

const productInitValues = {
  id: 0,
  title: 'string',
  description: 'string',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: 'string',
  category: 'string',
  thumbnail: 'string',
  images: [],
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = productInitValues;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProductById(productId).subscribe((value) => {
        this.product = value;
      });
    }
  }
}
