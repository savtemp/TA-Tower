<template>

  .<div class="container">
    <EventCard />
  </div>

</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { eventsService } from "../services/EventsService";
import Pop from "../utils/Pop";
import { computed } from 'vue';
import { AppState } from "../AppState";
import EventCard from "../components/EventPage/EventCard.vue";


export default {
  setup() {
    onMounted(() => {
      getEvent();
    });
    const route = useRoute();
    async function getEvent() {
      try {
        console.log("[EVENT ROUTE ID]", route.params);
        // SETTING VARIABLE FOR ROUTE PARAMS -CLEANER CODE-
        let eventId = route.params.id;
        await eventsService.getEventById(eventId);
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      event: computed(() => AppState.activeEvent),
    };
  },
  components: { EventCard }
}
</script>

<style>

</style>