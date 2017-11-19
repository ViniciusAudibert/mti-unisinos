import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../../pages/details/details'
import { MachineListPage } from '../../pages/machineList/machineList'

import { ModalService } from '../../services/modal/modal.service'

import { Machine } from '../../classes/Machine'
import { Product } from '../../classes/Product'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private selectedProduct: Product

  constructor(
    private modalService: ModalService,
    public navCtrl: NavController) {

  }

  public callbackSelectProduct(product: Product) {
    if (product.listMachine.length === 1) this.openDetails(product, product.listMachine[0])
    else this.openModalListMachine(product)
  }

  private openModalListMachine(product: Product) {
    this.modalService.openMachineList(
      product.description,
      product.listMachine,
      this.callbackSelectMachine.bind(this)
    )

    this.selectedProduct = product
  }

  private callbackSelectMachine(machine: Machine) {
    this.openDetails(this.selectedProduct, machine)
  }

  private openDetails(product: Product, machine: Machine) {
    this.navCtrl.push(DetailsPage, {
      machine,
      product,
    })
  }
}
