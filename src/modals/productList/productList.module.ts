import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProductListModal } from './productList';

@NgModule({
  declarations: [
    ProductListModal,
  ],
  imports: [
    IonicPageModule.forChild(ProductListModal),
  ],
  entryComponents: [
    ProductListModal,
  ]
})
export class ProductListModalModule {}
