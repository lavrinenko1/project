import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CurrencyService} from '../../../services/currency.service';

@Component({
  selector: 'app-products-information',
  templateUrl: './products-information.component.html',
  styleUrls: ['./products-information.component.scss']
})
export class ProductsInformationComponent implements OnInit {
  @Input() price: any;
  @Output() checkTypeCurrency = new EventEmitter<any>();
  eurPrice;
  changePrice: boolean = false;


  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.price = 50;
    const productData = {
      priceProduct: this.price,
      typeProduct: 'usd'
    };
    this.checkTypeCurrency.emit(productData);
  }

  changeCurrency() {
    const path = 'https://api.exchangeratesapi.io/latest?base=USD';

    this.changePrice = !this.changePrice;

    this.currencyService.get(path).subscribe(
      (item) => {
        this.eurPrice = this.price * (item.rates.EUR);
        if (this.changePrice) {
          const productData = {
            priceProduct: this.eurPrice,
            typeProduct: 'eur'
          };

          this.checkTypeCurrency.emit(productData);
        } else if (this.changePrice === false) {
          const productData = {
            priceProduct: this.price,
            typeProduct: 'usd'
          };
          this.checkTypeCurrency.emit(productData);
        }
      }
    );
  }
}
