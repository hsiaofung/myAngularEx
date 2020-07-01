import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'} // 加入預設路徑以重新導向Login頁，full表示完全相符
  // 宣告應用程式的路徑陣列
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: StockListComponent, canActivate: [AuthGuard] },
  { path: 'stocks/create', component: CreateStockComponent, canActivate: [AuthGuard] },
  { path: 'stock/:code', component: StockDetailsComponent, canActivate: [AuthGuard] }, // 載入股票細節
  { path: '**', redirectTo: '/register' } // 捕抓全部路徑，和**比較。
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // 匯入並登記根應用程式的路徑
  exports: [RouterModule], // 匯出RouterModule使匯入AppRoutesModule的模組可存取路由指令
})
export class AppRoutesModule {}
