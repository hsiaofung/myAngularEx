import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  @Input() public stocks: Array<Stock>;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  public stockClasses;
  public stockStyles;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit(): void {}

  onToggleFavorite(event, index) {
    //this.stocks[index].favorite = !this.stocks[index].favorite;
    this.toggleFavorite.emit(this.stocks[index]);
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  getStockClasses(index) {
    this.stockClasses = {
      positive: this.stocks[index].isPositiveChange(),
      negative: !this.stocks[index].isPositiveChange(),
      'large-change': this.stocks[index].isLargeChange(),
      'small-change': !this.stocks[index].isLargeChange(),
    };
    return this.stockClasses;
  }

  getStockStyles(index) {
    this.stockStyles = {
      color: this.stocks[index].isPositiveChange() ? 'green' : 'red',
      'font-size': this.stocks[index].isLargeChange() ? '1.2em' : '0.8em',
    };
    return this.stockStyles;
  }
}
