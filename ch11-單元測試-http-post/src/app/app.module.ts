import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockService } from './services/stock.service';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';

@NgModule({
  declarations: [AppComponent, StockListComponent, StockItemComponent, StockCreateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
