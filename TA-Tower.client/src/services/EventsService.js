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
}

export const eventsService = new EventsService();
