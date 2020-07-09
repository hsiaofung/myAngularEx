import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css'],
})
export class StockCreateComponent implements OnInit {
  public stock: Stock;
  public message = null;
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
      exchange: 'NYS',
      favorite: false,
    };
  }

  createStock(stockForm) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock).subscribe(
        (result: any) => {
          this.message = result.msg;
          console.log('Success post stock');
          this.initializeStock();
        },
        (err) => {
          console.log('Failed post stock');
          this.message = err.error.msg;
        }
      );
    } else {
      this.message = 'stock form is invalid';
    }
  }
}
