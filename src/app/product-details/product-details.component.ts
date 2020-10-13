import { Component, Input } from '@angular/core';
import { ProductService } from '../shared/shared.products';
@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],

})

export class ProductDetailsComponent {
  title = 'Product Details';
  constructor(private ProductList: ProductService){ }

  showMore(id) {
    window.location.href = this.ProductList.products[id].more;
  }
}
