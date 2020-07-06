import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockLoadResolverService } from './resolver/stock-load-resolver.service';

const appRoutes = [
  { path: '', redirectTo: '/stock/list', pathMatch: 'full' },
  { path: 'stock/list', component: StockListComponent },
  {
    path: 'stock/:code',
    component: StockDetailsComponent,
    resolve: { stock: StockLoadResolverService },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
