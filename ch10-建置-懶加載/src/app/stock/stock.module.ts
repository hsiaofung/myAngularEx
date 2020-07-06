import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStockComponent } from '../stock/create-stock/create-stock.component';
import { StockDetailsComponent } from '../stock/stock-details/stock-details.component';
import { StockListComponent } from '../stock/stock-list/stock-list.component';
import { StockItemComponent } from '../stock/stock-item/stock-item.component';

import { StockRoutingModule } from './stock-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, StockRoutingModule, FormsModule],
  declarations: [
    CreateStockComponent,
    StockDetailsComponent,
    StockListComponent,
    StockItemComponent,
  ],
})
export class StockModule {}
