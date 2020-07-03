import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockService } from './services/stock.service';
import { UserService } from './services/user.service';
import { UserStore } from './model/user-store';
import { UserStoreService } from './services/user-store.service';
import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactiveGuard } from './guards/create-stock-deactive.guard';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    CreateStockComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    StockService,
    UserService,
    UserStoreService,
    AuthGuard,
    CreateStockDeactiveGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
