<template>

  <EventBanner />

  <EventFilterBar />

  <div class="row d-flex justify-content-center">
    <div class="col-11">
      <div class="row">
        <div v-for="e in events" class="col-3">
          <EventCard :event="e" />
        </div>
      </div>
    </div>
  </div>

<EventForm />
</template>

<script>
import { onMounted } from "vue";
import { computed } from 'vue';
import { AppState } from "../AppState";
import EventBanner from "../components/HomePage/EventBanner.vue";
import EventCard from "../components/HomePage/EventCard.vue";
import EventFilterBar from "../components/HomePage/EventFilterBar.vue";
import EventForm from "../components/HomePage/EventForm.vue";
import { eventsService } from "../services/EventsService";
import Pop from "../utils/Pop";

export default {
  setup() {
    onMounted(() => {
      getEvents();
    });
    async function getEvents() {
      try {
        await eventsService.getEvents();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      events: computed(() => AppState.events),
    };
  },
  components: { EventCard, EventFilterBar, EventBanner, EventForm }
}
</script>

<style scoped lang="scss">

</style>
