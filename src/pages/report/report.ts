import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GenericEnum } from '../../constants/GenericEnum'
import { ReportOptions } from '../../constants/ReportOptions'

import { ModalService } from '../../services/modal/modal.service'
import { MachineService } from '../../services/machine/machine.service'
import { ReportService } from '../../services/report/report.service'

import { MachineListPage } from '../machineList/machineList'
import { AdminPage } from '../admin/admin'

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'
import { Report } from '../../classes/Report'

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  private selectedMachine: Machine
  private selectedProduct: Product

  public selectedValueOption: String
  public textOutro: String
  public reportOptions: GenericEnum[]

  constructor(
    public modalService: ModalService,
    public machineService: MachineService,
    public reportService: ReportService,
    public navCtrl: NavController) {
    this.reportOptions = new ReportOptions().toArray()
  }

  public selectOption(option) {
    if (!this.selectedMachine) this.openModalListMachine()
    else if (this.hasToOpenProductModal()) {
      this.openModalListProduct()
    }
  }

  ionViewDidEnter() {
    this.selectedValueOption = ""
    this.selectedMachine = undefined
    this.selectedProduct = undefined
  }

  private isFieldOther(): boolean {
    return this.selectedValueOption === 'OUTRO'
  }

  private isFieldProduct(): boolean {
    return this.selectedValueOption === 'SEM_PRODUTO'
  }

  private openModalListMachine() {
    const title = "Qual a Máquina?"
    const listMachine = this.machineService.getMachines()

    this.modalService.openMachineList(
      title,
      listMachine,
      this.callbackSelectMachine.bind(this)
    )
  }

  private openModalListProduct() {
    const title = "Qual o Produto?"

    this.modalService.openProductList(
      title,
      this.callbackSelectProduct.bind(this)
    )
  }

  private callbackSelectMachine(machine: Machine) {
    this.selectedMachine = machine
    if (this.hasToOpenProductModal()) {
      this.openModalListProduct()
    }
  }

  private callbackSelectProduct(product: Product) {
    this.selectedProduct = product
  }

  private sendReport() {
    if (!this.selectedMachine) {
      alert("Escolha qual a máquina")
      this.openModalListMachine()
    } else if (this.isFieldOther() && !this.textOutro) {
      alert('Por favor, preencha o campo "Outro"')
      document.getElementById('report__outro').focus()
    } else if (this.hasToOpenProductModal()) {
      this.openModalListProduct()
    } else {
      this.reportService.add(this.description(), this.selectedMachine, this.selectedProduct)
      alert("Obrigado pela sua colaboração!")
    }
  }

  private description(): String {
    if(this.isFieldOther()) return this.textOutro
    else return this.selectedValueOption
  }

  private hasToOpenProductModal(): boolean {
    return this.isFieldProduct() && !this.selectedProduct
  }
}
