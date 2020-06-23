import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock('TEST A', 'TA', 'NSADAQ', 86, 89),
      new Stock('TEST B', 'TB', 'NYPD', 100, 102),
      new Stock('TEST C', 'TC', 'YAM', 99, 60),
    ];
  }
  getStocks() {
    return this.stocks;
  }
  createStock(stock: Stock) {
    const foundStock = this.stocks.find((each) => each.code === stock.code);
    if (foundStock) {
      return false;
    } else {
      this.stocks.push(stock);
      return true;
    }
  }
  toggleFavorite(stock: Stock) {
    const foundStock = this.stocks.find((each) => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  }
}
