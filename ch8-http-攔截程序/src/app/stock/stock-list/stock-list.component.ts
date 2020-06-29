import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../../model/stock';
import { StockService } from 'src/app/services/stock.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<Stock[]>;
  constructor(
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    this.stocks$ = this.stockService.getStocks();
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe(
      (res) => console.log('Successfully made failing call', res),
      (err) => console.log('Error making failing call', err)
    );
  }
}
