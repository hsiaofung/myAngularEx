import { TestBed } from '@angular/core/testing';

import { StockLoadResolverService } from './stock-load-resolver.service';

describe('StockLoadResolverService', () => {
  let service: StockLoadResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockLoadResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
