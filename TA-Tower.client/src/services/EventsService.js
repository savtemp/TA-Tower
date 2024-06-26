import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class EventsService {
  async getEvents() {
    const res = await api.get("api/events");
    console.log(res.data);
    AppState.events = res.data;
  }

  async filterEvents(eventName) {
    const res = await api.get("api/events");
    AppState.events = res.data;
    if (eventName != "all") {
      let filter = AppState.events.filter((event) =>
        eventName ? event.type == eventName : true
      );
      logger.log("[FILTERED EVENTS]", filter);
      AppState.events = filter;
    }
  }

  async getEventById(eventId) {
    const res = await api.get(`api/events/${eventId}`);
    logger.log("[EVENT BY ID]", res.data);
    AppState.activeEvent = res.data;
  }

  async getTicketHolders(eventId) {
    const res = await api.get(`api/events/${eventId}/tickets`);
    logger.log("[TICKET HOLDERS]", res.data);
    AppState.ticketHolders = res.data;
  }

  async getEventComments(eventId) {
    const res = await api.get(`api/events/${eventId}/comments`);
    logger.log("[EVENT COMMENTS]", res.data);
    AppState.eventComments = res.data;
  }

  async getEventsByAccountId(accountId) {
    const res = await api.get("api/events");
    logger.log("[MY ID]", accountId);
    let events = res.data.filter((event) => event.creatorId != accountId);

    logger.log(events);
    AppState.yourEvents = res.data.filter(
      (event) => event.creatorId != accountId
    );
    AppState.yourEvents = AppState.yourEvents;
  }

  async createEvent(eventData){
    const res = await api.post(`api/event`, eventData)
    logger.log('[CREATING AN EVENT]', res.data)
  }
}

export const eventsService = new EventsService();
