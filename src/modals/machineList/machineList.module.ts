import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MachineListModal } from './machineList';

@NgModule({
  declarations: [
    MachineListModal,
  ],
  imports: [
    IonicPageModule.forChild(MachineListModal),
  ],
  entryComponents: [
    MachineListModal,
  ]
})
export class MachineListModalModule {}
