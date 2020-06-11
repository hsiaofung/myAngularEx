export class Stock {
  public favorite = false;
  constructor(
    public name,
    public code,
    public market,
    public price,
    public previousPrice
  ) {}

  isPositiveChange() {
    return this.price > this.previousPrice;
  }

  isLargeChange() {
    let diff = this.price / this.previousPrice - 1;
    return Math.abs(diff) > 0.01;
  }

  toggleFavorite() {
    return (this.favorite = !this.favorite);
  }
}
