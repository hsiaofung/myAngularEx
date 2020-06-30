import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  @Output() private productCreated: EventEmitter<void> = new EventEmitter();
  public product: Product;
  public message = '';
  public search: string;

  constructor(private productService: ProductService) {
    this.product = {
      id: 0,
      name: '',
      imageUrl: '',
      price: '0',
      isOnSale: false,
      quantityInCart: 0,
    };
  }

  ngOnInit(): void {}

  createProduct(productForm) {
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const product: Product = productForm.value.product;
      console.log('product', product);
      this.productService.createProduct(product).subscribe(
        (res) => {
          this.message = 'Product successfully created.';
          console.log('Triggered event emitter');
          this.productCreated.next();
        },
        (err) => {
          this.message = 'Unable to create product, please try again';
        }
      );
    }
  }
}
