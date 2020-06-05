import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  constructor() {}

  ngOnInit(): void {
    this.stock = new Stock('TSMC Company', 'TSMC', 'NASDAQ', 80, 60);
  }
  onToggleFavorite(event) {
    console.log('we toggle', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
