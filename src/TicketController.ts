import { Ticket } from "./Ticket";
import { ITicket, IVehicle } from "./type";

export class TicketController{
    static #instance: TicketController | null = null;

    static tickets = new Map<string, ITicket>();

    private constructor(){}

    public static get instance():TicketController{
        if(this.#instance === null){
            this.#instance = new TicketController();
        }

        return this.#instance;
    }

    static generateTicket(lotId:string, slotId:string | number, floorId:string | number, vehicle:IVehicle){
        const ticketId = `${lotId}_${floorId}_${slotId}`;
        const ticket = new Ticket(ticketId, vehicle);
        TicketController.tickets.set(ticketId, ticket);
        return ticket;
    }

    static getTicketWithId(ticketId:string): ITicket | undefined{
        return TicketController.tickets.get(ticketId);
    }

    static deleteTicket(ticketId:string){
        return TicketController.tickets.delete(ticketId);
    }
}