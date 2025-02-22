import { IParkingStrategy, IFloor, IVehicle, ISlot } from "./type";

export class RandomParkingStrategy implements IParkingStrategy{
    
    park(floors:IFloor[], vehicle: IVehicle): ISlot | null {
        
        const availableSlots: ISlot[] = [];

        floors.forEach( (floor) => {
            availableSlots.push(...floor.getAvailableSlots(vehicle.type));
        })

        if(availableSlots.length === 0){
            return null;
        }

        const randomNumber = Math.floor(Math.random() * availableSlots.length);

        const randomSlot = availableSlots[randomNumber];

        return randomSlot;
    }

}