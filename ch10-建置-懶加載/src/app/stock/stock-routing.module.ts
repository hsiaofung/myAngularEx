import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStockComponent } from '../stock/create-stock/create-stock.component';
import { StockDetailsComponent } from '../stock/stock-details/stock-details.component';
import { StockListComponent } from '../stock/stock-list/stock-list.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { CreateStockDeactivateGuard } from 'app/guards/create-stock-deactivate.guard';
import { StockLoadResolverService } from 'app/resolver/stock-load-resolver.service';

const routes: Routes = [
  {
    path: 'list',
    component: StockListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateStockComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CreateStockDeactivateGuard],
  },
  {
    path: ':code',
    component: StockDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { stock: StockLoadResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
