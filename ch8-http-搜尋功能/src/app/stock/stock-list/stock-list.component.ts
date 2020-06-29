import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../../model/stock';
import { StockService } from 'src/app/services/stock.service';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  startWith,
  share,
} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<Stock[]>;
  public searchString = '';

  // Subject 可以同時為觀察者與可觀察，他能夠發出事件並訂閱事件。
  // 在使用者於搜尋欄位打字時觸發事件。
  private searchTerms: Subject<string> = new Subject();

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    // 以Subject啟動，而非以StockService啟動。
    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString), // 確保網頁載入時可看到原始的股票清單
      debounceTime(500), // 確保使用者停止打字半秒才發出呼叫。
      distinctUntilChanged(), // 確保事件只會在值與之前不同時發出。
      switchMap((query) => this.stockService.getStocks(query)), // 型別轉換
      share()
    );
  }

  search() {
    // Subject 於使用者輸入字母時在search()發出事件。
    this.searchTerms.next(this.searchString);
  }
}
