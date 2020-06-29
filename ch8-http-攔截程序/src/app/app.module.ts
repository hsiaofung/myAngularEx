import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockService } from './services/stock.service';
import { AuthService } from './services/auth.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent,
    StockCreateComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    StockService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: StockAppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
