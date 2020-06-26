import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css'],
})
export class StockCreateComponent implements OnInit {
  public stock: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  constructor(private stockService: StockService) {
    this.initializeStock();
  }

  ngOnInit(): void {}

  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false,
    };
  }
  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock(stockForm) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock).subscribe(
        (result: any) => {
          this.message = result.msg;
          this.initializeStock();
        },
        (err) => {
          this.message = err.error.msg;
        }
      );
    } else {
      console.error('stock form is invalid');
    }
  }
}
