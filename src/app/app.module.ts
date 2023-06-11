import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BaseUrlInterceptor } from './services/http/base-url.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/shared/card/card.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SkeletonComponent } from './components/shared/skeleton/skeleton.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { SelectComponent } from './components/shared/select/select.component';
import { InputComponent } from './components/shared/input/input.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SvgIconComponent } from './components/shared/svg-icon/svg-icon.component';

import { InputValidatorDirective } from './components/shared/input/validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    ProductComponent,
    FooterComponent,
    LayoutComponent,
    SkeletonComponent,
    CartItemComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    ProductImagesComponent,
    ProductInfoComponent,
    SelectComponent,
    InputComponent,
    LoginComponent,
    SvgIconComponent,
    InputValidatorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
