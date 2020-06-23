import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css'],
})
export class StockCreateComponent implements OnInit {
  public stockForm: FormGroup;
  public stock: Stock;
  public message = null;

  constructor(private fb: FormBuilder, private stockService: StockService) {
    this.stock = new Stock('', '', '', 0, 0);
    this.createForm();
  }

  ngOnInit(): void {}

  createStock(stockForm) {
    if (stockForm.valid) {
      console.log('AAA', this.stockForm.value);
      this.stock.name = this.stockForm.value.name;
      this.stock.code = this.stockForm.value.code;
      this.stock.price = this.stockForm.value.price;

      const created = this.stockService.createStock(this.stock);
      if (created) {
        this.message = '成功' + this.stock.code;
      } else {
        this.message = '失敗，已存在' + this.stock.code;
      }
    } else {
      console.log('stock form is invalid');
    }
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notablePeople: this.fb.array([]),
    });
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

  get notablePeople(): FormArray {
    return this.stockForm.get('notablePeople') as FormArray;
  }

  submit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log(this.stock);
  }
  removePerson(index: number) {
    this.notablePeople.removeAt(index);
  }
  addPerson() {
    this.notablePeople.push(
      this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required],
      })
    );
  }
  resetStockForm() {
    this.stockForm.reset();
  }

  loadStockFromServer() {
    this.stock = new Stock('Test S', 'TSS', 'NYPD', 100, 101);
    delete this.stock.favorite;
    delete this.stock.exchange;
    delete this.stock.previousPrice;
    this.stockForm.setValue(Object.assign({}, this.stock));
  }

  patchStockForm() {
    this.stock = new Stock('Test P', 'TSP', 'NYPD', 520, 521);
    this.stockForm.patchValue(this.stock);
  }
}
