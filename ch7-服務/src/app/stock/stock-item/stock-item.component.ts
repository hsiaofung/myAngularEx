import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;
  @Output() public toggleFavorite: EventEmitter<Stock>;
  public stockClass;

  constructor() {
    this.toggleFavorite = new EventEmitter();
  }

  ngOnInit(): void {
    this.stockClass = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': this.stock.isLargeChange(),
      'small-change': !this.stock.isLargeChange(),
    };
  }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }
}
