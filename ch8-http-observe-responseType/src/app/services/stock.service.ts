import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock', {
      // headers: new HttpHeaders()
      //   .set('Authorization', 'MyAuthorizationHeaderValue')
      //   .set('X-EXAMPLE-HEADER', 'TestValue')
      //   .set('Editor-NAME', 'Tim'),
      // params: {
      //   q: 'test',
      //   test: 'value',
      // },
      // 只觀察回應內容
      observe: 'body',
    });
  }

  getStocksAsResponse(): Observable<HttpResponse<Stock[]>> {
    return this.http.get<Stock[]>('api/stock', {
      // 觀察整個回應
      observe: 'response',
    });
  }

  getStocksAsEvents(): Observable<HttpEvent<any>> {
    return this.http.get('api/stock', {
      // 觀察所有事件
      observe: 'events',
    });
  }

  getStocksAsString(): Observable<string> {
    return this.http.get('api/stock', {
      // 回應視為文字
      responseType: 'text',
    });
  }

  getStocksAsBlob(): Observable<Blob> {
    return this.http.get('api/stock', {
      // 回應視為blob
      responseType: 'blob',
    });
  }

  createStock(stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }
  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code, {
      favorite: !stock.favorite,
    });
  }
}
