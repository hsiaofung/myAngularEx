import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }
  setStockPrice(price) {
    this.stock.price = price;
  }
  createStock() {
    console.log('Creating stock', this.stock);
  }
}
