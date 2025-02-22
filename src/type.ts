export enum VehicleType{
    BIKE = 'BIKE',
    CAR = 'CAR',
    TRUCK = 'TRUCK'
}

export interface IVehicle{
    type: VehicleType,
    regNo: string,
    color: string
}

export interface IFloor{
    id:number;
    slots : Array<ISlot>;
    addSlot(vehicleType: VehicleType):void;
    getAvailableSlots(VehicleType?:VehicleType) : Array<ISlot>;
    getOccupiedSlots(VehicleType?:VehicleType) : Array<ISlot>;
}

export interface ISlot{
    id: number;
    type: VehicleType;
    isOccupied: boolean;
    floorId: number;
    occupy():void;
    release():void;
}

export interface IParkingStrategy{
    park(floors:IFloor[],vehicle:IVehicle):ISlot | null;
}

export interface ITicket{
    id:string;
    vehicle:IVehicle;
}