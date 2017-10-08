import { Injectable } from '@angular/core';

import { PRODUCTS } from './products';
import { Product } from '../../classes/Product';

@Injectable()
export class ProductService {

    products: Product[] = PRODUCTS

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(product => product.id === id)
    }
}