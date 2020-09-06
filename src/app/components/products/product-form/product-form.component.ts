import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TYPEPRODUCTS} from '../type-products';
import {Products} from '../products';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalCartComponent} from '../../../shared/modal-cart/modal-cart.component';
import {CurrencyService} from '../../../services/currency.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit, OnChanges {
  productForm: FormGroup;
  typesProducts: Products[];
  price: number;
  dataType;
  formData;
  img;
  popupImg;
  currencyType;

  @Output() type = new EventEmitter<string>();
  @Output() priceData = new EventEmitter<number>();
  @Input() currency: any;

  modalDataObject;
  modalContent;

  constructor(private fb: FormBuilder,
              private modalService: NgbModal,
              private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.typesProducts = TYPEPRODUCTS;
    console.log(this.currency);
    this.price = this.currency.priceProduct;
    this.currencyType = this.currency.typeProduct;

    this.formBuilder();
  }

  ngOnChanges(): void {
    console.log(this.currency);
    this.price = this.currency.priceProduct;
    this.currencyType = this.currency.typeProduct;
  }

  formBuilder() {
    this.productForm = this.fb.group({
      typeProducts: ['', Validators.required],
      sizeProduct: ['', Validators.required],
      colorProduct: ['', Validators.required]
    });
  }

  checkProductType(type) {
    this.dataType = type.target.value;
    this.type.emit(type.target.value);

    this.typesProducts.forEach(item => {
      if (item.type === this.dataType) {
        this.price = item.price;
        this.popupImg = item.img;
        this.priceData.emit(this.price);
      }
    });
  }

  submit(productForm: FormGroup) {

    const form = {
      ...productForm.value,
      img: this.popupImg
    };

    this.formData = form;

    const modalData = {
      img: this.formData.img,
      price: this.price,
      sizeProduct: this.formData.sizeProduct,
      dataType: this.dataType,
      colorProduct: this.formData.colorProduct,
      countProduct: 1,
      totalPrice: this.price,
      currency: this.currencyType
    };


    localStorage.setItem('modalData', JSON.stringify(modalData));
    this.modalService.open(ModalCartComponent);
  }
}
