// 初始化類別與方法並執行

// 匯入要測試的類別AppComponent
import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', () => {
  it('should have stock instantiated on ngInit', () => {
    // 初始化AppComponent 實例。
    const appComponent = new AppComponent();
    expect(appComponent.stock).toEqual(
      new Stock('AAA Company1', 'AAA', 'NASQAD', 85, 80)
    );
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 'NASDOQ', 85, 80)
    );
  });

  // 評估AppComponent類別中的onToggleFavorite方法。
  it('should have toggle stock favorite', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();

    // 執行onToggleFavorite
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 'NASDOQ', 54, 55));
    expect(appComponent.stock.favorite).toBeTruthy();

    // 再執行一次，則轉為false
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 'NASDOQ', 54, 55));
    expect(appComponent.stock.favorite).toBeFalsy();
  });

  it('should have change stock object', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 'NASDOQ', 85, 80)
    );

    // 執行changeStockObject
    appComponent.changeStockObject();
    expect(appComponent.stock).toEqual(
      new Stock('AAA Company2', 'AAA', 'NASQAD', 85, 80)
    );
  });

  it('should have change stock price', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 'NASDOQ', 85, 80)
    );

    // 執行changeStockPrice
    appComponent.changeStockPrice();
    expect(appComponent.stock.price).toEqual(95);
  });
});
