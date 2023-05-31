import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
})
export class ProductImagesComponent {
  @Input() images: string[] = [];
  selectedImage = 'https://i.dummyjson.com/data/products/27/1.jpg';

  handleImageSelect(imgUrl: string) {
    this.selectedImage = imgUrl;
  }
}
