import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class StockAppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  // 實作intercept這支API
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 檢查伺服器中的認證憑證，若有則改變請求為有認證的請求。
    // 變更標頭加上Authorization
    if (this.authService.authToken) {
      const authReq = request.clone({
        headers: request.headers.set(
          'Authorization',
          this.authService.authToken
        ),
      });
      console.log('Making a request to ', request.url);
      request = authReq; // 以額外的標頭改變請求為有認證的請求。
    }

    return next.handle(request).pipe(
      tap(
        // 呼叫handle這個API以繼續處理鏈
        (event) => this.handleResponse(request, event),
        (error) => this.handleError(request, error)
      )
    );
  }
  // 處理成功回應
  handleResponse(req: HttpRequest<any>, event) {
    console.log('Handling response for', req.url, event);
    if (event instanceof HttpResponse) {
      console.log(
        'Request for ',
        req.url,
        ' Response Status ',
        event.status,
        ' With body ',
        event.body
      );
    }
  }

  // 處理錯誤回應
  handleError(req: HttpRequest<any>, event) {
    console.error(
      'Request for ',
      req.url,
      ' Response Status ',
      event.status,
      ' With error ',
      event.error
    );
  }
}
