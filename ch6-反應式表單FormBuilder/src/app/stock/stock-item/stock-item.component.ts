import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  @Input() public stocks: Array<Stock>;
  @Output() private toggleFavorite: EventEmitter<Stock>;
  public stockClasses;

  constructor() {
    this.toggleFavorite = new EventEmitter();
  }

  ngOnInit(): void {}
  getStockClasses(index) {
    this.stockClasses = {
      positive: this.stocks[index].isPositiveChange(),
      negative: !this.stocks[index].isPositiveChange(),
      'large-change': this.stocks[index].isLargeChange(),
      'small-change': !this.stocks[index].isLargeChange(),
    };
    return this.stockClasses;
  }
  onToggleFavorite(i) {
    this.toggleFavorite.emit(i);
  }
}
