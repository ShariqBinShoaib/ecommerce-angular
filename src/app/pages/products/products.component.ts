import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types';
import { ProductService } from 'src/app/services/product.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  skeletonArray: any[] = Array(8);
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;

    this.productService
      .getProducts()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.products = res;
        },
        error: (error) => console.error(error),
      });
  }
}
