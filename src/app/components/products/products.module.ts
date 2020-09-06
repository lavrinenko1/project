import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsInformationComponent} from './products-information/products-information.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductsComponent} from './products/products.component';
import {SliderComponent} from './slider/slider.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from '../../shared/header/header.component';
import {ModalCartComponent} from '../../shared/modal-cart/modal-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    ProductsInformationComponent,
    ProductFormComponent,
    ProductsComponent,
    SliderComponent,
    HeaderComponent,
    ModalCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [ModalCartComponent],
  providers: [NgbActiveModal]
})
export class ProductsModule {
}
