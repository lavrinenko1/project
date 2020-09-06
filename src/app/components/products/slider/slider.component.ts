import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BALBOA, DOLORES, GRANT, HYDE, PROSPECT} from '../slider-image';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
  @Input() typeProduct: string;
  imageProductList = BALBOA;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.loadingSliderImages();
  }

  loadingSliderImages() {
    if (this.typeProduct === 'Balboa') {
      this.imageProductList = BALBOA;
    } else if (this.typeProduct === 'Dolores') {
      this.imageProductList = DOLORES;
    } else if (this.typeProduct === 'Grant') {
      this.imageProductList = GRANT;
    } else if (this.typeProduct === 'Hyde') {
      this.imageProductList = HYDE;
    } else if (this.typeProduct === 'Prospect') {
      this.imageProductList = PROSPECT;
    }
  }
}
