import { ParkingLot } from "./ParkingLot";
import { RandomParkingStrategy } from "./RandomParkingStrategy";
import { VehicleType, ISlot } from "./type";
import { Vehicle } from "./Vehicle";

export class ParkingLotController{
    parkingLot!:ParkingLot;

    createParkingLot(id:string, totalFloors:number, totalSlots:number){
        if(this.parkingLot){
            throw new Error('ParkingLot already exists');
        }
        this.parkingLot = new ParkingLot(id, new RandomParkingStrategy);

        this.parkingLot.addFloors(totalFloors);

        const floors = this.parkingLot.floors;

        floors.forEach( floor => {
            for(let ind = 0; ind<totalSlots; ind++){
                const vehicleType = ind === 0 ? VehicleType.TRUCK : ind <=2 ? VehicleType.BIKE : VehicleType.CAR;
                floor.addSlot(vehicleType);
            }
        })

        return `Created parking Lot with ${totalFloors} floors and ${totalSlots} slots per floor`;
    }

    parkVehicle(vType:string, regNo:string, color:string){

        const vehicleType = VehicleType[vType as keyof typeof VehicleType];

        const vehicle = new Vehicle(vehicleType, regNo, color);

        const ticket = this.parkingLot.parkVehicle(vehicle);

        if(ticket){
            return `Parked vehicle. Ticket ID: ${ticket.id}`;
        }

        return "Parking Lot full";
    }

    unparkVehcile(ticketId:string){
        return this.parkingLot.unparkVehicle(ticketId);
    }

    display(displayType:string, vType:string){
        const vehicleType = VehicleType[vType as keyof typeof VehicleType];
        let data;
        switch(displayType) {
            
            case 'free_slots':
                // console.log(displayType);
            case 'free_count':
                // console.log(displayType);
                data = this.parkingLot.getFreeSlots(vehicleType, displayType === 'free_slots');
                // console.log(`data is ${data}`);
                break;
            case 'occupied_slots':
                // console.log(displayType);
                data = this.parkingLot.getOccupiedSlots(vehicleType);
                break;
        }

        let resp = '';
        if (data) {
            Object.entries(data).forEach(d => {
                // console.log(data);
                const [floor, slotsOrCount] = d;
                resp += printSlotsData(displayType, vehicleType, floor, slotsOrCount) + '\n';
            })
        }
        return resp;
    }
}

function printSlotsData(displayType: string, vehicleType: string, floor: string, slotsOrCount?: Array<ISlot> | number) {
    switch(displayType) {
        case 'free_slots' :
            return `No. of free slots for ${vehicleType} on Floor ${floor}: ${(slotsOrCount as Array<ISlot>).map(slot => slot.id)}`;
        case 'free_count' :
            return `Free slots for ${vehicleType} on Floor ${floor}: ${slotsOrCount}`;
        case 'occupied_slots' :
            return `Occupied slots for ${vehicleType} on Floor ${floor}: ${(slotsOrCount as Array<ISlot>).map(slot => slot.id)}`;
    }
}
