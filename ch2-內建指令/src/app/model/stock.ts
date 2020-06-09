export class Stock {
  public favorite = false;
  constructor(
    public name,
    public code,
    public price,
    public market,
    public previousPrice
  ) {}
  toggleFavorite(event) {
    this.favorite = !this.favorite;
    console.log(event);
  }
  isPositiveChange(): boolean {
    return this.price > this.previousPrice;
  }
}
