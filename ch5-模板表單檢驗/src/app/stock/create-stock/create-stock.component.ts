import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;

  public confirmed = false;
  public options = ['NASDAQ', 'NYPD', 'YAM'];
  constructor() {}

  ngOnInit(): void {
    this.stock = new Stock('Test', 'test', 'NASDAQ', 0, 0);
  }

  onConfirm() {
    this.confirmed = !this.confirmed;
  }
  createStock(stockForm) {
    console.log('create stock', stockForm);
    if (stockForm.valid) {
      console.log('create stock', this.stock);
    } else {
      console.error('Stock form is invalid ');
    }
  }
}
