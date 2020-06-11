import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  //套用AppComponent的樣式，不限於該元件而進入全域命名空間。
  //因此加上name類別的元素會套用這個字型大小。
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mytest';
  public stocks: Array<Stock>;
  constructor() {
    this.stocks = [
      new Stock('AAA Company', 'AAA', 'NASDOQ', 86, 85),
      new Stock('BBB Company', 'BBB', 'NYPD', 30, 31),
      new Stock('CCC Company', 'CCC', 'YAM', 12, 12.01),
    ];
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was trigger');
    stock.favorite = !stock.favorite;
  }
}
