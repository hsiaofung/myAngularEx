import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

let counter = 1;
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
    this.stock = new Stock('Test' + counter++, 'TST', 'NAS', 20, 10);
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
    // 不要直接assign 表單模型給資料模型，而是用複製。
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Saving Stock', this.stock);
  }

  get name() {
    return this.stockForm.get('name');
  }

  get code() {
    return this.stockForm.get('code');
  }

  get price() {
    return this.stockForm.get('price');
  }

  loadStockFromServer() {
    this.stock = new Stock('Test' + counter++, 'TST', 'NAS', 20, 10);

    // 不要直接assign 表單模型給資料模型，而是用複製。
    const stockFormModel = Object.assign({}, this.stock);

    // 要事先刪掉多餘的鍵，不多不少就是name, code, price。不然set 會發生錯誤。
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    delete stockFormModel.market;
    this.stockForm.setValue(stockFormModel);
  }

  patchStockForm() {
    this.stock = new Stock('Test' + counter++, 'TST', 'NAS', 20, 10);
    // patch 會忽略多餘的鍵值。
    this.stockForm.patchValue(this.stock);
  }
  resetForm() {
    this.stockForm.reset();
  }
}
