import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css'],
})
export class StockCreateComponent implements OnInit {
  public confirmed = false;
  public stock: Stock;
  public message = null;
  public exchanges = ['NASDOQ', 'NAY', 'YAM'];
  constructor(private stockService: StockService) {
    this.initializeStock();
  }

  ngOnInit(): void {}
  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      exchange: 'NASDOQ',
      price: 0,
      previousPrice: 0,
      favorite: false,
    };
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
    }
  }
  setPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
}
