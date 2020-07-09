import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { StockCreateComponent } from './stock-create.component';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { StockService } from 'src/app/services/stock.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('StockCreateComponent', () => {
  let component: StockCreateComponent;
  let fixture: ComponentFixture<StockCreateComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockCreateComponent, StockItemComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [StockService],
    }).compileComponents();
  }));

  beforeEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      httpBackend = backend;
      fixture = TestBed.createComponent(StockCreateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  ));

  beforeEach(() => {
    component.stock = {
      name: 'Test Stock',
      price: 200,
      previousPrice: 500,
      code: 'TSS',
      exchange: 'NYSE',
      favorite: false,
    };
  });

  it('should make call to create stock and handle success', async(() => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    component.createStock({ valid: true });
    let httpReq = httpBackend.expectOne(
      {
        url: '/api/stock',
        method: 'POST',
      },
      'Create Stock with Success'
    );
    expect(httpReq.request.body).toEqual(component.stock);
    httpReq.flush(
      { msg: 'Stock create success.' },
      { status: 200, statusText: 'Success!!' }
    );

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const messageEl = fixture.debugElement.query(By.css('.message'))
        .nativeElement;
      expect(messageEl.textContent).toEqual('Stock create success.');
    });
  }));

  it('should make call to create stock and handle failure', async(() => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    component.createStock({ valid: true });
    let httpReq = httpBackend.expectOne(
      {
        url: '/api/stock',
        method: 'POST',
      },
      'Create Stock with Failure'
    );
    expect(httpReq.request.body).toEqual(component.stock);
    httpReq.flush(
      { msg: 'Stock already exists.' },
      { status: 400, statusText: 'Failed!!' }
    );

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const messageEl = fixture.debugElement.query(By.css('.message'))
        .nativeElement;
      expect(messageEl.textContent).toEqual('Stock already exists.');
    });
  }));

  it('should have invalid message when stock form is invalid', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    component.createStock({ valid: false });
    expect(component.message).toEqual('stock form is invalid');
  });
  afterEach(() => {
    httpBackend.verify();
  });
});
