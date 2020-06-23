import { FormArray } from '@angular/forms';

export class Stock {
  public favorite = false;
  public notablePeople: Person[];
  constructor(
    public name: string,
    public code: string,
    public exchange: string,
    public price: number,
    public previousPrice: number
  ) {
    this.notablePeople = [];
  }
  isPositiveChange() {
    return this.price > this.previousPrice;
  }
  isLargeChange() {
    const diff = this.price - this.previousPrice;
    return Math.abs(diff) > 1;
  }
}

export class Person {
  name: string;
  title: string;
}
