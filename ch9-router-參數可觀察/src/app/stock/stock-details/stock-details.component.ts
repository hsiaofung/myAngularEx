import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { ActivatedRoute } from '@angular/router'; // 保存目前作用中路徑的資訊
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
})
export class StockDetailsComponent implements OnInit {
  public stock: Stock;
  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {} // 將作用中的路徑注入建構元

  ngOnInit() {
    // snapshot 中的paramMap是所有URL參數的圖。
    const stockCode = this.route.snapshot.paramMap.get('code'); // 從URL讀取代號
    this.stockService
      .getStock(stockCode)
      .subscribe((stock) => (this.stock = stock));
  }
}
