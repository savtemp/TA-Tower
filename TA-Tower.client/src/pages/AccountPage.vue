<template>
  <div class="row d-flex justify-content-center mt-4">
    <div class="col-11 text-start">
      <h2 class="textColorGreen">My Events</h2>
    </div>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="col-11">
      <div class="row">
        <div v-for="e in events" class="col-3">
          <EventCard :event="e" />
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-5 d-flex justify-content-center">
    <div class="col-11">
      <h2 class="textColorGreen">Upcoming Events</h2>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div v-for="t in tickets" class="col-5 ticket ">
      <Ticket :ticket="t" />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { computed } from 'vue'
import { AppState } from '../AppState'
import EventCard from "../components/AccountPage/EventCard.vue";
import Ticket from "../components/AccountPage/Ticket.vue";
import { accountService } from "../services/AccountService";
import { api } from "../services/AxiosService";
import { eventsService } from "../services/EventsService";
import Pop from "../utils/Pop";
export default {
  setup() {
    onMounted(() => {
      getMyEvents();
      getTickets()
    });

    async function getMyEvents() {
      try {
        await accountService.getAccount()
        await eventsService.getEventsByAccountId(AppState.account.id);
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }

    async function getTickets() {
      try {
        await accountService.getTickets()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    return {
      account: computed(() => AppState.account),
      events: computed(() => AppState.yourEvents),
      tickets: computed(() => AppState.myTickets)
    };
  },
  components: { EventCard, Ticket }
}
</script>

<style scoped>
.textColorGreen {
  color: #79E6AB;
  text-shadow: 1px 1px 1px black;
}

.ticket {
  margin-right: 121px;
}
</style>
