import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { MachineService } from '../../services/product/machine.service'

import { HomePage } from '../home/home'
import { DetailsPage } from '../details/details'
import { ReportPage } from '../report/report'

import { Machine } from '../../classes/Machine'

@Component({
  selector: 'page-machine-list',
  templateUrl: 'machineList.html'
})
export class MachineListPage {
  private safeMachines: Machine[]
  public machines: Machine[]
  constructor(private keyboard: Keyboard, public navCtrl: NavController, private machineService: MachineService) {
    this.getMachines()
    this.resetMachines()
  }

  public greet() {
    alert('Obrigado pela sua colaboração!')
    this.navCtrl.popToRoot()
  }

  public machineDetail(machine: Machine) {
    this.navCtrl.push(DetailsPage, {machine})
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

  private getMachines() {
    this.safeMachines = this.machineService.getMachines()
  }

  private resetMachines() {
    this.machines = this.safeMachines.slice()
  }

}
