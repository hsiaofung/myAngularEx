import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(query: string): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock?q=${query}');
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
