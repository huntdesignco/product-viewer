import { Component, Input } from '@angular/core';
import { ProductService } from '../shared/shared.products';

@Component({
  selector: 'product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css'],

})
export class ProductGalleryComponent {
  title = 'Product Gallery';

  counter(i: number) {
    return new Array(i);
  }
  
  constructor(private ProductList: ProductService){ }
  selectProductImage(id) {
    this.ProductList.selectedImage = id;
  }
}
