import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
})
export class ProductImagesComponent implements OnChanges {
  @Input() images: string[] = [];
  selectedImage = '';

  ngOnChanges(): void {
    console.log(this.images);
    if (this.images.length) {
      this.selectedImage = this.images[0];
    }
  }

  handleImageSelect(imgUrl: string) {
    this.selectedImage = imgUrl;
  }
}
