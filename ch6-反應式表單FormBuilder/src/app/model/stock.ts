export class Stock {
  public favorite = false;
  constructor(
    public name: string,
    public code: string,
    public market: string,
    public price: number,
    public previousPrice: number
  ) {}

  isPositiveChange() {
    return this.price > this.previousPrice;
  }
  isLargeChange() {
    const diff = this.price - this.previousPrice;
    return Math.abs(diff) > 1;
  }
}
