import { Auth0Provider } from "@bcwdev/auth0provider";
import { ticketsService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";


export class TicketsController extends BaseController{
  constructor(){
    super(`api/tickets`)
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:ticketId', this.getTicketById)
      .post('', this.createTicket)
      .delete('/:ticketId', this.deleteTicket)
  }

  async getTicketById (req, res, next) {
  try {
    const ticket = await ticketsService.getTicketById(req.params.ticketId)
    res.send(ticket)
  } catch (error) {
    next(error)
    }
  }

  async createTicket (req, res, next) {
  try {
    let ticketData = req.body
    ticketData.accountId = req.userInfo.id
    const ticket = await ticketsService.createTicket(ticketData)
    res.send(ticket)
  } catch (error) {
    next(error)
    }
  }

  async deleteTicket (req, res, next) {
  try {
    let ticket = await ticketsService.deleteTicket(req.params.ticketId, req.userInfo.id)
    res.send(ticket)
  } catch (error) {
    next(error)
    }
  }
}