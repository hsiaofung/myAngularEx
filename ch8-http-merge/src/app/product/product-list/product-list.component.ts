import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Observable, Subject } from 'rxjs';

import {
  startWith,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  merge,
} from 'rxjs/operators';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;
  public searchTerm = '';
  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.searchSubject.pipe(
      startWith(this.searchTerm),
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.reloadProductsList),
      switchMap((query) => this.productService.getProducts(this.searchTerm))
    );
  }
  search() {
    this.searchSubject.next(this.searchTerm);
  }
  onCreate() {
    this.reloadProductsList.next();
  }
  onQuantityChange(change: ProductQuantityChange) {
    this.productService
      .changeQuantity(change.product.id, change.changeInQuantity)
      .subscribe((res) => this.reloadProductsList.next());
  }
}
