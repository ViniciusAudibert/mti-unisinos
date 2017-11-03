import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { Machine } from '../../classes/Machine'

@Component({
  templateUrl: 'machineList.html'
})
export class MachineListModal {
  // Modal Params
  private onItemClick: Function
  private title: String
  private listMachine: Machine[]

  // Props
  public machines: Machine[]

  constructor(
    private keyboard: Keyboard,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.title = navParams.get("title")
    this.onItemClick = navParams.get("onItemClick")
    this.listMachine = navParams.get("listMachine")
    this.resetMachines()
  }

  public getPageTitle() {
    return this.title
  }

  public openProductDetails(machine: Machine) {
    this.onItemClick(machine)
    this.dismiss()
  }

  public filterMachine(event: any) {
    let value = event.target.value

    this.resetMachines()

    if (value && value.trim() != '') {
      this.machines = this.listMachine.filter(machine => machine.description.toLowerCase().includes(value.toLowerCase()))
    }
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

  public dismissKeyboard(): void {
    this.keyboard.close()
  }

  private resetMachines() {
    this.machines = this.listMachine.slice()
  }

}
