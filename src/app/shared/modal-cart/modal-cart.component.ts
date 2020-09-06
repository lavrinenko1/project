import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnInit {
  @ViewChild('content', {static: false})
  content?: ElementRef<HTMLElement>;

  modalDataObject;
  countProduct;
  totalPrice;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    const data = localStorage.getItem('modalData');

    this.modalDataObject = JSON.parse(data);
    this.countProduct = this.modalDataObject.countProduct;
    this.totalPrice = this.modalDataObject.totalPrice;
  }

  addCountProduct(flag) {

    if (flag) {
      this.countProduct += 1;
      this.totalPrice += this.modalDataObject.price;
    } else if (flag === false) {
      if (this.countProduct === 1) {
        this.countProduct = 1;
      } else {
        this.countProduct -= 1;
        this.totalPrice -= this.modalDataObject.price;
      }
    }
    this.modalDataObject.totalPrice = this.totalPrice;
    this.modalDataObject.countProduct = this.countProduct;
    localStorage.setItem('modalData', JSON.stringify(this.modalDataObject));
  }

}
