import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public stockForm: FormGroup;
  public confirmed = false;
  public options = ['NASDAQ', 'NYPD', 'YAM'];
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.stockForm = this.fb.group({
      // FormControl 的第一個參數是預設值，第二個參數是Validator或Validator陣列。
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit(): void {
    this.stock = new Stock('Test', 'test', 'NASDAQ', 0, 0);
  }

  onConfirm() {
    this.confirmed = !this.confirmed;
  }
  createStock(stock) {
    console.log('create stock', stock);
  }

  onSubmit() {
    console.log('Name Control Value', this.stockForm.value);
  }
}
