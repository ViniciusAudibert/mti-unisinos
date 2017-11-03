import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GenericEnum } from '../../constants/GenericEnum'
import { ReportOptions } from '../../constants/ReportOptions'

import { ModalService } from '../../services/modal/modal.service'

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

  public sendReport() {
    if (this.isFieldOther() && !this.textOutro) {
      alert('Por favor, preencha o campo "Outro"')
    }

    alert('Obrigado pela sua colaboração!')

    this.navCtrl.parent.select(0)
  }


  public openModal() {
    this.modalService.openMachineList('Teste', [], () => 1)
  }

  public isFieldOther(): boolean {
    return this.selectedValueOption === 'OUTRO'
  }
}
