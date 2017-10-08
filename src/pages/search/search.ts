import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../classes/Product'
import { ProductService } from '../../services/product/product.service'

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
        this.safeProducts = productService.getProducts()
        this.resetProducts()
    }

    public productDetails(product: Product) {
        if (product) {
            alert(product.id)
        }
    }

    public getProducts(event: any) {
        let value = event.target.value

        this.resetProducts()
        
        if (value && value.trim() != '') {
            this.products = this.safeProducts.filter(product => product.descricao.toLowerCase().indexOf(value.toLowerCase()) > -1)
        }
    }

    private resetProducts() {
        this.products = this.safeProducts.slice()
    }

}
