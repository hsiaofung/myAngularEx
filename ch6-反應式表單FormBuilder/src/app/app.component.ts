import { Component } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stocks: Array<Stock>;

  constructor() {
    this.stocks = [
      new Stock('AAA Company', 'AAA', 'NASDOQ', 85, 80),
      new Stock('BBB Company', 'BBB', 'NASY', 30, 38),
      new Stock('CCC Company', 'CCC', 'YAM', 120, 120.1),
    ];
  }
  onToggleFavorite(index) {
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
