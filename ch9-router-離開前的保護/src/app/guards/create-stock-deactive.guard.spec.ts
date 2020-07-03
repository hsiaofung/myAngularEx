import { TestBed } from '@angular/core/testing';

import { CreateStockDeactiveGuard } from './create-stock-deactive.guard';

describe('CreateStockDeactiveGuard', () => {
  let guard: CreateStockDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateStockDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
