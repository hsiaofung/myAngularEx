import { TestBed, async } from '@angular/core/testing';
import { StockItemComponent } from './stock-item.component';
import { Stock } from '../../model/stock';
import { By } from '@angular/platform-browser';

describe('StockItemComponent', () => {
  let fixture, component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockItemComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stocks = [
      new Stock('Test Company1', 'Test Code1', 'Test Market', 0, 0),
      new Stock('Test Company2', 'Test Code2', 'Test Market', 0, 0),
      new Stock('Test Company3', 'Test Code3', 'Test Market', 0, 0),
    ];
    fixture.detectChanges();
  });

  it('should create stock component and render data', () => {
    const nameEl = fixture.debugElement.query(By.css('.name'));
    expect(nameEl.nativeElement.textContent).toEqual('Test Company1');
    const codeEl = fixture.debugElement.query(By.css('.code'));
    expect(codeEl.nativeElement.textContent).toEqual('Test Code1');
    const marketEl = fixture.debugElement.query(By.css('.market'));
    expect(marketEl.nativeElement.textContent).toEqual('Test Market');
    const priceEl = fixture.debugElement.query(By.css('.price'));
    expect(priceEl.nativeElement.textContent).toEqual('$ 0');
    const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
    expect(addToFavoriteBtnEl).toBeDefined();
  });

  it('should trigger toggleFavorite', () => {
    let selectStock: Stock;
    component.toggleFavorite.subscribe(() => {
      (stock: Stock) => (selectStock = stock);
    });
    const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
    expect(selectStock).toBeUndefined();
    addToFavoriteBtnEl.triggerEventHandler('click', null);
    expect(selectStock).toEqual(component.stock);
  });
});
