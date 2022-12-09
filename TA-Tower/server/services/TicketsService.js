import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { towerEventsService } from "./TowerEventsService.js";


class TicketsService{
  async getTicketById(ticketId) {
    let ticket = await dbContext.Ticket.findById(ticketId).populate('profile', 'name picture')
    if(!ticket){
      throw new BadRequest(`${ticketId} is not a valid TicketId.`)
    }
    return ticket
  }
  async getTicketsByEventId(eventId) {
    let tickets = await dbContext.Ticket.find({eventId})
    .populate('profile', 'name picture')
    return tickets
  }
  async getTicketsByAccountId(accountId) {
    let tickets = await dbContext.Ticket.find({accountId})
    .populate('profile', 'name picture')
    .populate('event')
    return tickets 
  }
  async createTicket(ticketData) {
    let towerEvent = await towerEventsService.getEventById(ticketData.eventId)
    if(towerEvent.isCanceled == true){
      throw new BadRequest('This event has been cancelled, you can no longer purchase a ticket.')
    }
    if(towerEvent.capacity == 0){
      throw new BadRequest('This event is full. There are no tickets available.')
    }
    let ticket = await dbContext.Ticket.create(ticketData)
    await ticket.populate('profile', 'name picture')
    // @ts-ignore
    towerEvent.capacity-- 
    await towerEvent.save()
    return ticket
  }
  async deleteTicket(ticketId, userInfo) {
    let ticket = await this.getTicketById(ticketId)
    let towerEvent = await dbContext.Event.findById(ticket.eventId)

    if(!ticket){
      throw new BadRequest(`${ticketId} is not a valid TicketId.`)
    }

    if(ticket.accountId != userInfo){
      throw new Forbidden('You cannot delete a ticket that you did not create.')
    }
    await ticket.remove()
    // @ts-ignore
    towerEvent.capacity ++
    // @ts-ignore
    towerEvent.save()
    return ticket
  }
}


export const ticketsService = new TicketsService()