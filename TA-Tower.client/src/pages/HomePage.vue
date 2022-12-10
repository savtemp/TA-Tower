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


</template>

<script>
import { onMounted } from "vue";
import { computed } from 'vue';
import { AppState } from "../AppState";
import { eventsService } from "../services/EventsService";
import Pop from "../utils/Pop";

export default {
  setup() {
    onMounted(() => {
      getEvents()
    })
    async function getEvents() {
      try {
        await eventsService.getEvents()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }

    }

    return {
      events: computed(() => AppState.events),


    }
  }
}
</script>

<style scoped lang="scss">

</style>
