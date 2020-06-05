export class Stock {
  public favorite = false;
  // 沒有實際定義name與code等變數為類別的屬性。
  // 這是因為使用TypeScript的縮寫語法，以根據
  // 建構元參數的public關鍵字自動產生相對應的屬性。
  constructor(
    public name: string,
    public code: string,
    public market: string,
    public price: number,
    public previousPrice: number
  ) {}

  priceIncrease(): boolean {
    return this.price > this.previousPrice;
  }
}
