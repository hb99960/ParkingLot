import { ParkingLotController } from "./ParkingLotController";

export class CommandController{
    parkingLotController: ParkingLotController;

    constructor(parkingLotController:ParkingLotController){
        this.parkingLotController = parkingLotController;
    }

    executeCommand(command:string, ...args:Array<string|number>){


        switch(command){
            case `create_parking_lot`:
                return this.parkingLotController.createParkingLot(...args as [string, number, number])
            case `park_vehicle`:
                return this.parkingLotController.parkVehicle(...args as [string, string, string]);
            case `unpark_vehicle`:
                return this.parkingLotController.unparkVehcile(...args as [string]);
            case `display`:
                return this.parkingLotController.display(...args as [string, string]);
            default:
                return `Invalid Command`;

        }
    }
}