import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class TowerEventsService{
  async getAllEvents() {
    let towerEvents = await dbContext.Event.find().populate('creator', 'name picture')
    return towerEvents
  }
  async getEventById(eventId) {
    let towerEvent = await dbContext.Event.findById(eventId).populate('creator', 'name picture')
    if(!towerEvent){
      throw new BadRequest(`${eventId} is not a valid EventId.`) 
    }
    return towerEvent
  }
  async createEvent(eventData) {
    let towerEvent = await dbContext.Event.create(eventData)
    await towerEvent.populate('creator', 'name picture')
    return towerEvent
  }
  async editEvent(eventId, eventData) {
    let towerEvent = await this.getEventById(eventId)

    if(towerEvent.isCanceled == true){
      throw new Forbidden(`${eventId} has been cancelled. You cannot make changes to cancelled events.`)
    }

    towerEvent.name = eventData.name || towerEvent.name
    towerEvent.description = eventData.description || towerEvent.description
    towerEvent.coverImg = eventData.coverImg || towerEvent.coverImg
    towerEvent.location = eventData.location || towerEvent.location
    towerEvent.capacity = eventData.capacity || towerEvent.capacity
    towerEvent.startDate = eventData.startDate || towerEvent.startDate
    towerEvent.type = eventData.type || towerEvent.type

    await towerEvent.save()
    return towerEvent
  }
  async cancelEvent(eventId, userInfo) {
    let towerEvent = await this.getEventById(eventId);
    if(towerEvent.creatorId != userInfo){
      throw new Forbidden('You cannot cancel an event that you did not create.')
    }
    towerEvent.isCanceled = true
    await towerEvent.save()
    return towerEvent
  }
}


export const towerEventsService = new TowerEventsService()