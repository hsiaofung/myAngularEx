export class Stock {
  public favorite = false;
  notablePeople: Person[];
  constructor(
    public name: string,
    public code: string,
    public market: string,
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
