import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stocks: Array<Stock>;
  public stockClasses;
  public stockStyles;
  public security;

  constructor() {}

  ngOnInit(): void {
    this.stock = new Stock('TBT company', 'TSC', 80, 'NASDOQ', 79);
    this.stocks = [
      new Stock('TBT company', 'TSC', 80, 'NASDOQ', 79),
      new Stock('ABC company', 'ACC', 130, 'NASDOQ', 128),
      new Stock('GGG company', 'GCC', 50, 'NASDOQ', 62),
    ];
    let diff = this.stock.price / this.stock.previousPrice - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange,
    };

    //ngStyle : 在CSS的樣式/屬性層級運作。它取用的鍵與值是CSS屬性而非類別名稱
    this.stockStyles = {
      color: this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2em' : '0.8em',
    };
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  toggleFavorite(event, index) {
    console.log('We are toggling the favorite state for stock', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
