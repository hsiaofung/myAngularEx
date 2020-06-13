// 初始化類別與方法並執行

// 匯入要測試的類別AppComponent
import { AppComponent } from './app.component';
import { Stock } from './model/stock';

// 為了測試元件互動
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

describe('AppComponent', () => {
  describe('Simple, No Angular Unit Test', () => {
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
      appComponent.onToggleFavorite(
        new Stock('Test', 'TEST', 'NASDOQ', 54, 55)
      );
      expect(appComponent.stock.favorite).toBeTruthy();

      // 再執行一次，則轉為false
      appComponent.onToggleFavorite(
        new Stock('Test', 'TEST', 'NASDOQ', 54, 55)
      );
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

  // 為了測試元件互動
  describe('Angular-Aware test', () => {
    let fixture, component;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, StockItemComponent],
      }).compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should load stock with default values', () => {
      // 檢查模板中的預設股價
      const nameEl = fixture.debugElement.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent).toEqual(
        'Test Stock Company(TSC)'
      );
      const priceEl = fixture.debugElement.query(By.css('.price'));
      expect(priceEl.nativeElement.textContent).toEqual('$ 85');

      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    });

    it('should toggle stock favorite correctly', () => {
      // 首先檢查預設值，確定股票預設值並非最愛
      expect(component.stock.favorite).toBeFalsy();
      let addToFavoriteBtnEl = fixture.debugElement.query(By.css('.favorite'));

      // 加到我的最愛有顯示
      expect(addToFavoriteBtnEl).toBeDefined();

      // 觸發按鈕的click事件
      addToFavoriteBtnEl.triggerEventHandler('click', null);

      fixture.detectChanges();
      expect(component.stock.favorite).toBeTruthy();
      addToFavoriteBtnEl = fixture.debugElement.query(By.css('.favorite'));
      expect(addToFavoriteBtnEl).toBeNull();
    });
  });
});
