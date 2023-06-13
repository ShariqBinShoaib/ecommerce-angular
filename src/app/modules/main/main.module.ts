import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

// Module components
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { ProductImagesComponent } from 'src/app/components/product-images/product-images.component';
import { ProductInfoComponent } from 'src/app/components/product-info/product-info.component';

// Pages components
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { ProductDetailComponent } from 'src/app/pages/product-detail/product-detail.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { MainComponent } from './main.component';
import { CartService } from 'src/app/services/cart/cart.service';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    LayoutComponent,
    CartItemComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    ProductImagesComponent,
    ProductInfoComponent,
  ],
  providers: [CartService],
  imports: [CommonModule, MainRoutingModule, SharedModule, FormsModule],
  bootstrap: [MainComponent],
})
export class MainModule {}
