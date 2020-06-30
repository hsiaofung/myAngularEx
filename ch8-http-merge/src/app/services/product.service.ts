import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>('/api/product', {
      params: { q: query },
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('api/product', product);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.http.patch('/api/product/' + id, {
      changeInQuantity,
    });
  }
}
