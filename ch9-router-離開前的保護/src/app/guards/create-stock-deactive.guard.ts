import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CreateStockComponent } from '../stock/create-stock/create-stock.component';

@Injectable({
  providedIn: 'root',
})
export class CreateStockDeactiveGuard
  implements CanDeactivate<CreateStockComponent> {
  canDeactivate(
    component: CreateStockComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return window.confirm('Do you want to navigate away from this page?');
  }
}
