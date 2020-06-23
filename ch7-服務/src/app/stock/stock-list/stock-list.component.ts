import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks: Stock[];
  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks = this.stockService.getStocks();
  }
  onToggleFavorite(stock: Stock) {
    this.stockService.toggleFavorite(stock);
  }
}
