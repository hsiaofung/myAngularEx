import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stocks: Array<Stock>;
  public stockClasses;
  public stockStyles;

  constructor() {
    this.stocks = [
      new Stock('TBB Company', 'TBB', 'NASDOQ', 85, 85.01),
      new Stock('XYY Company', 'XYY', 'NYPD', 75, 79),
      new Stock('UZZ Company', 'UZZ', 'UAM', 32, 31.88),
    ];
  }

  ngOnInit(): void {}

  toggleFavorite(event, index) {
    this.stocks[index].favorite = !this.stocks[index].favorite;
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
