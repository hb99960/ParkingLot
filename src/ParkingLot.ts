import { Floor } from "./Floor";
import { TicketController } from "./TicketController";
import { IParkingStrategy, IFloor, IVehicle, ITicket, VehicleType, ISlot } from "./type";


export class ParkingLot{
    id:string;
    parkingStrategy: IParkingStrategy;
    floors : Array<IFloor>;
    
    constructor(id:string, parkingStrategy:IParkingStrategy) {
        this.id = id;
        this.parkingStrategy = parkingStrategy;
        this.floors = [];
    }

    // add floors, addslots

    setParkingStrategy(parkingStrategy:IParkingStrategy){
        this.parkingStrategy = parkingStrategy;
    }

    // addFloors
    addFloors(floors:number){
        for(let i=1; i<=floors; i++){
            this.floors.push(new Floor(i));
        }
    }

   

    parkVehicle(vehicle:IVehicle) : ITicket | undefined{

        const slotToBook = this.parkingStrategy.park(this.floors, vehicle);

        if(slotToBook){
            // return ticket
            const ticket = TicketController.generateTicket(this.id, slotToBook.id, slotToBook.floorId, vehicle);

            return ticket
        }

    }

    unparkVehicle(ticketId:string){
        const ticket = TicketController.getTicketWithId(ticketId);

        if(ticket){
            const [_parkingLotId, floorId, slotId] = ticketId.split('_');
            const floor = this.floors[Number(floorId) - 1];
            const slot = floor.slots[Number(slotId) - 1];
            slot.release();
            TicketController.deleteTicket(ticketId);

            return `Unparked vehicle with Registration Number : ${ticket.vehicle.regNo} and Color: ${ticket.vehicle.color}`;
        }

        return "Invalid ticket";
    }

    getFreeSlots(vehicleType: VehicleType, showSlots:boolean = false){
        const floors = this.floors;
        const freeSlots:{ [x:string] : ISlot[]|number} = {};

        floors.forEach( floor => {
            const availableSlots = floor.getAvailableSlots(vehicleType);

            freeSlots[floor.id] = showSlots ? availableSlots : availableSlots.length;
        })

        return freeSlots;
    }

    getOccupiedSlots(vehicleType:VehicleType){
        const floors = this.floors;

        const occupiedSlots:{ [x:string]: ISlot[] | number} = {};

        floors.forEach( floor => {
            occupiedSlots[floor.id] = floor.getOccupiedSlots(vehicleType);
        })

        return occupiedSlots;
    }

}