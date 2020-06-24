import { Injectable } from '@angular/core';

/* 注意 : Observable O 大寫*/
import { Observable } from 'rxjs/Observable';

/* 注意 : observable o 小寫*/
import { _throw as ObservableThrow } from 'rxjs/observable/throw';

/* 注意 : observable o 小寫*/
import { of as ObservableOf } from 'rxjs/observable/of';
import { Stock } from 'app/model/stock';

@Injectable()
export class StockService {
  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
    ];
  }
  // 將服務的每個方法的回傳值改為可觀察。
  getStocks(): Observable<Stock[]> {
    return ObservableOf(this.stocks);
  }

  // 將服務的每個方法的回傳值改為可觀察。
  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    if (foundStock) {
      return ObservableThrow({
        msg: 'Stock with code ' + stock.code + ' already exists',
      });
    }
    this.stocks.push(stock);
    return ObservableOf({
      msg: 'Stock with code ' + stock.code + ' successfully created',
    });
  }

  // 將服務的每個方法的回傳值改為可觀察。
  toggleFavorite(stock: Stock): Observable<Stock> {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
    return ObservableOf(foundStock);
  }
}
