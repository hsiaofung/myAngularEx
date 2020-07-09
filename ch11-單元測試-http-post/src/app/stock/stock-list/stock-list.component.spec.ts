import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { StockService } from 'src/app/services/stock.service';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent, StockItemComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [StockService],
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      httpBackend = backend;
      fixture = TestBed.createComponent(StockListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      httpBackend
        .expectOne(
          {
            url: '/api/stock',
            method: 'GET',
          },
          'Get list of stcoks'
        )
        .flush([
          {
            name: 'Test 1',
            code: 'TS1',
            exchange: 'NSYS',
            price: 80,
            previousPrice: 90,
            favorite: false,
          },
          {
            name: 'Test 2',
            code: 'TS2',
            exchange: 'NSYS',
            price: 800,
            previousPrice: 900,
            favorite: false,
          },
        ]);
    }
  ));

  it('should load stocks from real service ', async(() => {
    expect(component).toBeTruthy();
    expect(component.stocks).toBeTruthy();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const stockItems = fixture.debugElement.queryAll(
        By.css('app-stock-item')
      );
      expect(stockItems.length).toEqual(2);
    });
  }));

  afterEach(() => {
    httpBackend.verify();
  });
});
