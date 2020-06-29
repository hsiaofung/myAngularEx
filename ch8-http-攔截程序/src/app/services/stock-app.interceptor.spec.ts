import { TestBed } from '@angular/core/testing';

import { StockAppInterceptor } from './stock-app.interceptor';

describe('StockAppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StockAppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StockAppInterceptor = TestBed.inject(StockAppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
