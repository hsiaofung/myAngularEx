import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public nameControl;
  constructor() {
    this.nameControl = new FormControl();
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.nameControl.value);
  }
}
