import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockService } from './services/stock.service';
@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    StockCreateComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [StockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
