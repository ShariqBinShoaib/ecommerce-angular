import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product, SelectOption } from 'src/app/types';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnChanges {
  @Input() productInfo?: Omit<Product, 'images'>;
  selectedQuantity: string = '1';
  ratingArray: unknown[] = [];

  qtyOptions: SelectOption[] = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ];

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ratingArray = Array(Math.round(this.productInfo?.rating || 0));
  }

  handleSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedQuantity = target.value;
  }

  handleAddCart() {
    if (this.productInfo) {
      this.cartService
        .addCart({
          userId: 1,
          products: [
            {
              id: this.productInfo.id,
              quantity: Number(this.selectedQuantity),
            },
          ],
        })
        .subscribe((value) => {
          this.cartService.setCartData(value);
        });
    }
  }
}
