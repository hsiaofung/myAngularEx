import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],

  // 此元件根據Input決定是否要檢查
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit(): void {}

  getStockClasses() {
    return {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': this.stock.isLargeChange(),
      'small-change': !this.stock.isLargeChange(),
    };
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    // 子元件更新父元件傳進 Input stock的屬性price。立即更新
    this.stock.price += 5;
  }
}
