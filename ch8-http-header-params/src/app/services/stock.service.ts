import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock', {
      headers: new HttpHeaders()
        .set('Authorization', 'MyAuthorizationHeaderValue')
        .set('X-EXAMPLE-HEADER', 'TestValue')
        .set('Editor-NAME', 'Tim'),
      params: {
        q: 'test',
        test: 'value',
      },
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
