import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { ProductService } from '../../services/product/product.service'
import { ModalService } from '../../services/modal/modal.service'

import { DetailsPage } from '../details/details'
import { MachineListPage } from '../machineList/machineList'

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private selectedProduct: Product
  private safeProducts: Product[]
  public products: Product[]

  constructor(
    private keyboard: Keyboard,
    private productService: ProductService,
    private modalService: ModalService,
    public navCtrl: NavController) {
    this.getProducts()
    this.resetProducts()
  }

  public productDetails(product: Product) {
    if (product) {
      if (product.listMachine.length === 1) this.openDetails(product, product.listMachine[0])
      else this.openModalListMachine(product)
    }
  }

  public machineSelection() {
    this.navCtrl.push(MachineListPage, {})
  }

  public filterProducts(event: any) {
    let value = event.target.value

    this.resetProducts()

    if (value && value.trim() != '') {
      this.products = this.safeProducts.filter(product => product.description.toLowerCase().includes(value.toLowerCase()))
    }
  }

  dismissKeyboard() {
    this.keyboard.close()
  }

  private openDetails(product: Product, machine: Machine) {
    this.navCtrl.push(DetailsPage, {
      machine,
      product,
    })
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

  private getProducts() {
    this.safeProducts = this.productService.getProducts()
  }

  private resetProducts() {
    this.products = this.safeProducts.slice()
  }
}
