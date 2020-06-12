import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    OnDestroy {
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

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('App Component - Do Checked');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Change', changes);
  }
}
