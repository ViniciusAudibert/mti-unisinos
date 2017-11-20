import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'
import { Report } from '../../classes/Report'

import { MachineService } from '../../services/machine/machine.service'
import { ReportService } from '../../services/report/report.service'
import { ModalService } from '../../services/modal/modal.service'

@Component({selector: 'page-admin-list', templateUrl: 'admin.html'})
export class AdminPage {

  private selectedMachine: Machine
  private reports: Report[]

  constructor(private keyboard: Keyboard,
              public navCtrl: NavController,
              public navParams: NavParams,
              public machineService: MachineService,
              public reportService: ReportService,
              public modalService: ModalService) {
  }

  ionViewDidEnter() {
    this.selectedMachine = this.navParams.get("machine")
    //console.log()
    if(!this.selectedMachine) this.openModalListMachine()
  }

  ionViewDidLeave() { this.selectedMachine = null }

  private openModalListMachine() {
    const title = "Qual a Máquina?"
    const listMachine = this.machineService.getMachines()
    this.modalService.openMachineList(title, listMachine, this.callbackSelectMachine.bind(this))
  }

  private callbackSelectMachine(machine: Machine) {
    this.selectedMachine = machine
    this.reports = this.reportService.withMachine(this.selectedMachine.id)
  }

  public dismissKeyboard(): void {
    this.keyboard.close()
  }

  public fix(report): void {
    report.resolved = true
  }

}
