import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { towerEventsService } from "../services/TowerEventsService.js";
import { ticketsService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";


export class TowerEventsController extends BaseController{
  constructor(){
    super(`api/events`)
    this.router
      .get('', this.getAllEvents)
      .get('/:eventId', this.getEventById)
      .get('/:eventId/comments', this.getCommentsByEventId)
      .get('/:eventId/tickets', this.getTicketsByEventId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEvent)
      .put('/:eventId', this.editEvent)
      .delete('/:eventId', this.cancelEvent)
  }


  async getAllEvents(req, res, next) {
  try {
    const towerEvents = await towerEventsService.getAllEvents()
    res.send(towerEvents)
  } catch (error) {
    next(error)
    }
  }

  async getEventById (req, res, next) {
  try {
    const towerEvent = await towerEventsService.getEventById(req.params.eventId)
    res.send(towerEvent)
  } catch (error) {
    next(error)
    }
  }

  async getCommentsByEventId (req, res, next) {
  try {
    const comments = await commentsService.getCommentsByEventId(req.params.eventId)
    res.send(comments)
  } catch (error) {
    next(error)
    }
  }

  async getTicketsByEventId (req, res, next) {
  try {
    const tickets = await ticketsService.getTicketsByEventId(req.params.eventId)
    res.send(tickets)
  } catch (error) {
    next(error)
    }
  }

  async createEvent (req, res, next) {
  try {
    let eventData = req.body
    eventData.creatorId = req.userInfo.id
    const towerEvent = await towerEventsService.createEvent(eventData)
    res.send(towerEvent)
  } catch (error) {
    next(error)
    }
  }

  async editEvent (req, res, next) {
  try {
    let eventData = req.body
    const towerEvent = await towerEventsService.editEvent(req.params.eventId, eventData, req.userInfo.id)
    res.send(towerEvent)
  } catch (error) {
    next(error)
    }
  }

  async cancelEvent (req, res, next) {
  try {
    const towerEvent = await towerEventsService.cancelEvent(req.params.eventId, req.userInfo.id)
    res.send(towerEvent)
  } catch (error) {
    next(error)
    }
  }

}