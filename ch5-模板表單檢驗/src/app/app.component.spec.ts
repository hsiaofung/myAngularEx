import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { Stock } from './model/stock';
import { componentFactoryName } from '@angular/compiler';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  describe('Simple, No Angular unit testing', () => {
    it('should initial class and method', () => {
      const component = new AppComponent();
      expect(component.stocks).toEqual([
        new Stock('AAA Company', 'AAA', 'NASDOQ', 85, 80),
        new Stock('BBB Company', 'BBB', 'NASY', 30, 38),
        new Stock('CCC Company', 'CCC', 'YAM', 120, 120.1),
      ]);
    });
    it('should toggle favorite', () => {
      const component = new AppComponent();
      expect(component.stocks[1].favorite).toBeFalsy();
      component.onToggleFavorite(1);
      expect(component.stocks[1]).toBeTruthy();
      component.onToggleFavorite(1);
      expect(component.stocks[1].favorite).toBeFalsy();
    });
  });

  describe('Angular-Aware testing', () => {
    let fixture, component;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, StockItemComponent, CreateStockComponent],
      }).compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      component.stocks = [
        new Stock('Testing AAA Company', 'TAAA', 'NASDOQ', 85, 80),
        new Stock('Testing BBB Company', 'TBBB', 'NASY', 30, 38),
        new Stock('Testing CCC Company', 'TCCC', 'YAM', 120, 120.1),
      ];
      fixture.detectChanges();
    });
    it('should load stock by default value', () => {
      const nameEl = fixture.debugElement.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent).toEqual('Testing AAA Company');

      const priceEl = fixture.debugElement.query(By.css('.price'));
      expect(priceEl.nativeElement.textContent).toEqual('$ 85');

      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    });

    it('should trigger toggle', () => {
      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(component.stocks[0].favorite).toBeFalsy();
      addToFavoriteBtnEl.triggerEventHandler('click', null);
      expect(component.stocks[0].favorite).toBeTruthy();
    });
  });
});
