import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
  FormArray,
} from '@angular/forms';
import { Stock, Person } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public stockForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notablePeople: this.fb.array([]),
    });
  }

  get notablePeople(): FormArray {
    return this.stockForm.get('notablePeople') as FormArray;
  }

  get name() {
    return this.stockForm.get('name');
  }
  // 增加任意數量的經營者
  addNotablePerson() {
    this.notablePeople.push(
      this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required],
      })
    );
  }

  removeNotablePerson(index: number) {
    this.notablePeople.removeAt(index);
  }

  resetForm() {
    this.stockForm.reset();
  }

  loadStockFromServer() {
    this.stock = new Stock('TESTING Company', 'TST', 'NASDOQ', 91, 92);
    delete this.stock.market;
    delete this.stock.previousPrice;
    delete this.stock.favorite;
    this.stock.notablePeople = [];
    this.stockForm.setValue(Object.assign({}, this.stock));
  }
  patchStockForm() {
    this.stock = new Stock('Fake Company', 'FAC', 'NYPD', 520, 521);
    this.stockForm.patchValue(this.stock);
  }
  submit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log(this.stock);
  }
}
