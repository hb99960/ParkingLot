import { ITicket, IVehicle } from "./type";

export class Ticket implements ITicket{
    id: string;
    vehicle: IVehicle;

    constructor(id:string, vehicle:IVehicle){
        this.id = id;
        this.vehicle = vehicle;
    }
}