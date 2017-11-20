import { Injectable } from '@angular/core';

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'
import { Report } from '../../classes/Report'

import { REPORTS } from './reports';

@Injectable()
export class ReportService {

  reports: Report[] = REPORTS

  withMachine(id: number): Report[] {
    return this.reports.filter(report => report.machine.id === id)
  }

  add(d: String, m: Machine, p: Product) {
    var report: Report = this.reports.find(report => report.machine == m && report.description === d && report.product == p && !report.resolved)

    if(report == null) {
      this.reports.unshift({description: d, machine: m, product: p, quantity: 1, resolved: false, date: new Date()})
    } else {
      report.quantity = report.quantity + 1
      report.date = new Date()
    }
  }

}
