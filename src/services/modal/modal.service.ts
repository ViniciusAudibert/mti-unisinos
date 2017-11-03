import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Machine } from '../../classes/Machine'

import { MachineListModal } from '../../modals/machineList/machineList'

@Injectable()
export class ModalService {

  constructor(public modalCtrl: ModalController) { }

  public openMachineList(title: String, listMachine: Machine[], onItemClick: Function): void {
    this.modalCtrl.create(MachineListModal, {
      title,
      listMachine,
      onItemClick,
     }).present()
  }
}
