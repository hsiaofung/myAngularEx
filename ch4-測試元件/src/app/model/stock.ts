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
    const diff = this.price / this.previousPrice - 0.1;
    return Math.abs(diff) > 1;
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}
