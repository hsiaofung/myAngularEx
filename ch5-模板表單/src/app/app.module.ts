import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';

@NgModule({
  declarations: [AppComponent, CreateStockComponent],

  // 設定表單
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
