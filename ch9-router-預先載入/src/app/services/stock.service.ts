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
    return this.http.get<Stock[]>(
      '/api/stock'
      // {
      //   headers: new HttpHeaders().set('X-AUTH-HEADER', '123'),
      // }
    );
  }
  getStock(code): Observable<Stock> {
    return this.http.get<Stock>(
      '/api/stock/' + code
      // {
      //   headers: new HttpHeaders().set('X-AUTH-HEADER', '123'),
      // }
    );
  }
}
