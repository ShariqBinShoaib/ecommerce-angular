import { Component, Input } from '@angular/core';

export type SkeletonTypes = 'product-card' | 'product-detail' | 'cart-item';
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {
  @Input() type: SkeletonTypes = 'product-card';
  images: unknown[] = Array(5);
}
