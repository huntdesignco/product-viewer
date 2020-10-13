import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductService } from './shared/shared.products';

@NgModule({
  declarations: [
    AppComponent,
	ProductListComponent,
	ProductDetailsComponent,
	ProductGalleryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ProductListComponent,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
