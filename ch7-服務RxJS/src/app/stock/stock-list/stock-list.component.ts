import { Component, OnInit } from '@angular/core';
import { StockService } from 'app/services/stock.service';
import { Stock } from 'app/model/stock';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  // 若是無須處理資料、轉換、或做其他事。只是想呼叫伺服器，並在UI顯示回傳值。
  // 使用這種簡寫法
  public stocks$: Observable<Stock[]>;
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }
}
