import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GenericEnum } from '../../constants/GenericEnum'
import { ReportOptions } from '../../constants/ReportOptions'

import { ModalService } from '../../services/modal/modal.service'

import { SearchPage } from '../search/search'
import { MachineListPage } from '../machineList/machineList'

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  public selectedValueOption: String
  public textOutro: String
  public reportOptions: GenericEnum[]

  constructor(
    public modalService: ModalService,
    public navCtrl: NavController) {
    this.reportOptions = new ReportOptions().toArray()
  }

  public selectOption(option) {

  }

  ionViewDidEnter() { this.selectedValueOption = "" }

  public sendReport() {
    if (this.isFieldOther() && !this.textOutro) {
      alert('Por favor, preencha o campo "Outro"')
    } else if (this.isFieldProduct()) {
      this.navCtrl.push(SearchPage, {})
    } else {
      this.navCtrl.push(MachineListPage, {})
    }
  }

  public openModal() {
    this.modalService.openMachineList('Teste', [], () => 1)
  }

  public isFieldOther(): boolean {
    return this.selectedValueOption === 'OUTRO'
  }

  public isFieldProduct(): boolean {
    return this.selectedValueOption === 'SEM_PRODUTO'
  }
}
