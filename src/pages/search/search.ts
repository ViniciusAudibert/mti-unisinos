import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../classes/Product'
import { ProductService } from '../../services/product/product.service'

import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  safeProducts: Product[]
  products: Product[]

  constructor(
    private productService: ProductService,
    public navCtrl: NavController) {
    this.getProducts()
    this.resetProducts()
  }

  public productDetails(product: Product) {
    if (product) {
      this.navCtrl.push(DetailsPage, {
        product
      })
    }
  }

  public filterProducts(event: any) {
    let value = event.target.value

    this.resetProducts()

    if (value && value.trim() != '') {
      this.products = this.safeProducts.filter(product => product.description.toLowerCase().indexOf(value.toLowerCase()) > -1)
    }
  }

  private getProducts() {
    this.safeProducts = this.productService.getProducts()
  }

  private resetProducts() {
    this.products = this.safeProducts.slice()
  }

}
