import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/shared.products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  title = 'Product List';
  constructor(public ProductList: ProductService){ }

}