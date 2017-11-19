import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Machine } from '../../classes/Machine'
import { Product } from '../../classes/Product'

import { MachineListModal } from '../../modals/machineList/machineList'
import { ProductListModal } from '../../modals/productList/productList'

@Injectable()
export class ModalService {

  constructor(public modalCtrl: ModalController) { }

  public openMachineList(title: String, listMachine: Machine[], onItemClick: Function): void {
    this.modalCtrl.create(MachineListModal, {
      title,
      listMachine,
      onItemClick,
     }).present()
  }

  public openProductList(title: String, onItemClick: Function): void {
    this.modalCtrl.create(ProductListModal, {
      title,
      onItemClick,
     }).present()
  }
}
