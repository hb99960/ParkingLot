import { IVehicle, VehicleType } from "./type";

export class Vehicle implements IVehicle{
    type: VehicleType;
    regNo: string;
    color: string;

    constructor(type:VehicleType, regNo:string, color:string){
        this.type = type;
        this.regNo = regNo;
        this.color = color;
    }

}