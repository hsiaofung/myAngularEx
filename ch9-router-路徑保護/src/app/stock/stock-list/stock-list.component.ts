import { Component, OnInit } from '@angular/core';
import { StockService } from 'app/services/stock.service';
import { Stock } from 'app/model/stock';
import { Observable } from 'rxjs/Observable';
import { UserStoreService } from '../../services/user-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<Stock[]>;
  private page = 1;
  constructor(
    private stockService: StockService,
    private userStore: UserStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Page No. :', this.route.snapshot.queryParamMap.get('page')); // 從snapshot讀取查詢參數
    this.route.queryParams.subscribe((params) => {
      // 訂閱queryParams的改變
      console.log('Page : ', params.page);
      this.stocks$ = this.stockService.getStocks();
    });
  }

  nextPage() {
    this.router.navigate([], {
      // 增加頁數並導向同一頁
      queryParams: {
        page: ++this.page,
      },
    });
  }
}
