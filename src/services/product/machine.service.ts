import { Injectable } from '@angular/core';

import { MACHINES } from './products';
import { Machine } from '../../classes/Machine';

@Injectable()
export class MachineService {

    machines: Machine[] = MACHINES

    getMachines(): Machine[] {
        return this.machines;
    }

    getMachine(id: number): Machine {
        return this.machines.find(machine => machine.id === id)
    }
}
