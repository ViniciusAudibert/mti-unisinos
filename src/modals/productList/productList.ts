import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { ProductService } from '../../services/product/product.service'

import { Product } from '../../classes/Product'

@Component({
  templateUrl: 'productList.html'
})
export class ProductListModal {
  // Modal Params
  private onItemClick: Function
  private title: String

  // Class Attributes
  private safeProducts: Product[]
  public products: Product[]

  constructor(
    private keyboard: Keyboard,
    public viewCtrl: ViewController,
    private productService: ProductService,
    public navParams: NavParams) {
    this.title = navParams.get("title")
    this.onItemClick = navParams.get("onItemClick")
    this.getProducts()
    this.resetProducts()
  }

  public getPageTitle() {
    return this.title
  }

  public itemClick(product: Product) {
    this.onItemClick(product)
    this.dismiss()
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

  public filterProducts(event: any) {
    let value = event.target.value

    this.resetProducts()

    if (value && value.trim() != '') {
      this.products = this.safeProducts.filter(product => product.description.toLowerCase().includes(value.toLowerCase()))
    }
  }

  public dismissKeyboard() {
    this.keyboard.close()
  }

  private getProducts() {
    this.safeProducts = this.productService.getProducts()
  }

  private resetProducts() {
    this.products = this.safeProducts.slice()
  }
}
