import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'

const MACHINE_ONE: Machine = {
  id: 1,
  description: 'Phmande 1000',
  local: 'Panquecas do Alemão',
  urlImage: 'assets/products/maquina01.jpg',
  lat: -29.795004,
  lon: -51.152100
}

export const PRODUCTS: Product[] =
  [
    {
      id: 1,
      description: 'Coca-Cola 350ml',
      machine: MACHINE_ONE,
      quantity: 10
    },
    {
      id: 2,
      description: 'Água de Coco 100ml',
      machine: MACHINE_ONE,
      quantity: 2
    },
    {
      id: 3,
      description: 'Toddynho 100ml',
      machine: MACHINE_ONE,
      quantity: 10
    },
    {
      id: 4,
      description: 'Red Bull 275ml',
      machine: MACHINE_ONE,
      quantity: 6
    },
    {
      id: 5,
      description: 'Água 500ml s/ Gás',
      machine: MACHINE_ONE,
      quantity: 10
    },
    {
      id: 6,
      description: 'Cappucino 100ml',
      machine: MACHINE_ONE,
      quantity: 0
    },
    {
      id: 7,
      description: 'Café Extra Forte 100ml',
      machine: MACHINE_ONE,
      quantity: 0
    },
    {
      id: 8,
      description: 'Água 500ml c/ Gás',
      machine: MACHINE_ONE,
      quantity: 10
    },
    {
      id: 9,
      description: 'Brahama 1L',
      machine: MACHINE_ONE,
      quantity: 4
    },
    {
      id: 10,
      description: 'Chocolate 5 Stars 25g',
      machine: MACHINE_ONE,
      quantity: 21
    },
  ]
