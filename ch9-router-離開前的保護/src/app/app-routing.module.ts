import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { CreateStockDeactiveGuard } from './guards/create-stock-deactive.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'stocks/list',
    component: StockListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stocks/create',
    component: CreateStockComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CreateStockDeactiveGuard],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
