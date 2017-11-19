import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'

import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-machine-list',
  templateUrl: 'machineList.html'
})
export class MachineListPage {
  private safeMachines: Machine[]
  public machines: Machine[]
  public product: Product

  constructor(
    private keyboard: Keyboard,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.product = navParams.get("product")
    this.safeMachines = this.product.listMachine
    this.resetMachines()
  }

  public openProductDetails(indexMachine: number) {
    this.navCtrl.push(DetailsPage, {
      indexMachine,
      product: this.product,
    })
  }

  public filterMachine(event: any) {
    let value = event.target.value

    this.resetMachines()

    if (value && value.trim() != '') {
      this.machines = this.safeMachines.filter(machine => machine.description.toLowerCase().includes(value.toLowerCase()))
    }
  }

  public dismissKeyboard(): void {
    this.keyboard.close()
  }

  private resetMachines() {
    this.machines = this.safeMachines.slice()
  }

}
