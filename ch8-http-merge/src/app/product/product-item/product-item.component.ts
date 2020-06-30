import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<
    ProductQuantityChange
  > = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  incrementInCart() {
    this.quantityChange.emit({ product: this.product, changeInQuantity: 1 });
  }
  decrementInCart() {
    this.quantityChange.emit({ product: this.product, changeInQuantity: -1 });
  }
}
