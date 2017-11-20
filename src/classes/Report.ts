import { Machine } from './Machine'
import { Product } from './Product'

export class Report {
  description: String;
  product: Product;
  machine: Machine;
  quantity: number;
  resolved: boolean;
  date: Date;
}
