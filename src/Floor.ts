import { Slot } from "./Slot";
import { IFloor, ISlot, VehicleType } from "./type";

export class Floor implements IFloor{
    id: number;
    slots: ISlot[];

    constructor(id:number){
        this.id = id;
        this.slots = [];
    }

    // addslots

    addSlot(vehicleType:VehicleType){
        this.slots.push(new Slot(this.slots.length + 1, vehicleType, this.id));
    }

    getAvailableSlots(VehicleType?: VehicleType): Array<ISlot> {
        let availableSlots = [];
        for(const slot of this.slots){
            if(slot.isOccupied){
                continue;
            }
            if(!VehicleType){
                availableSlots.push(slot);
            } else if (slot.type === VehicleType){
                availableSlots.push(slot);
            }
        }

        return availableSlots;
    }
    getOccupiedSlots(VehicleType?: VehicleType): Array<ISlot> {
        let occupiedslots = [];

        for (const slot of this.slots){
            if(!slot.isOccupied){
                continue;
            }

            if(!VehicleType){
                occupiedslots.push(slot);
            } else if(slot.type === VehicleType){
                occupiedslots.push(slot);
            }
        }

        return occupiedslots;
    }
    
}