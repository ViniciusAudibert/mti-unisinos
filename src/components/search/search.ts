import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { ProductService } from '../../services/product/product.service'

import { Product } from '../../classes/Product'

@Component({
  selector: 'component-search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  @Output() onItemClick = new EventEmitter<Product>();

  private safeProducts: Product[]
  public products: Product[]

  constructor(
    private keyboard: Keyboard,
    private productService: ProductService,
    public navCtrl: NavController) {
    this.getProducts()
    this.resetProducts()
  }

  public itemClick(product: Product) {
    this.onItemClick.emit(product)
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

  private getProducts() {
    this.safeProducts = this.productService.getProducts()
  }

  private resetProducts() {
    this.products = this.safeProducts.slice()
  }
}
