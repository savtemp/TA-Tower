import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService.js'
import { ticketsService } from '../services/TicketsService.js'
import BaseController from '../utils/BaseController.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/tickets', this.getMyTickets)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getMyTickets (req, res, next) {
  try {
    const tickets = await ticketsService.getTicketsByAccountId(req.userInfo.id)
    res.send(tickets)
  } catch (error) {
    next(error)
    }
  }
}
