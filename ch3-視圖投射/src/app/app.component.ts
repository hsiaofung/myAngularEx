import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public stock: Stock;
  private counter = 1;

  constructor() {
    this.stock = new Stock(
      'AAA Company' + this.counter++,
      'AAA',
      'NASQAD',
      85,
      80
    );
  }

  onToggleFavorite(event) {
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    this.stock = new Stock(
      'AAA Company' + this.counter++,
      'AAA',
      'NASQAD',
      85,
      80
    );
  }
  changeStockPrice() {
    this.stock.price += 10;
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 'NASDOQ', 85, 80);
    console.log('App Component - On Init');
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }
}
