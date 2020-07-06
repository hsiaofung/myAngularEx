import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { AppRoutesModule } from './app-routes.module';
import { StockService } from './services/stock.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
import { StockLoadResolverService } from './resolver/stock-load-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    StockDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutesModule, HttpClientModule],
  providers: [
    StockService,
    { provide: HTTP_INTERCEPTORS, useClass: StockAppInterceptor, multi: true },
    StockLoadResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
