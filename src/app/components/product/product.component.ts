import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | null = null;
  ratingArray: any[] = [];

  ngOnInit(): void {
    this.ratingArray = Array(Math.round(this.product?.rating || 0));
  }
}
