import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  typeProduct;
  priceProduct;
  saveCurrencyType;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkPriceProduct(price) {
    this.priceProduct = price;
  }

  checkProductType(type) {
    this.typeProduct = type;
  }

  saveCurrency(currency) {
    this.saveCurrencyType = currency;
  }
}
