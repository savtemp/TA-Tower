<template>

  <div class="row my-5 d-flex justify-content-center">
    <div class="col-11 text-light">
      <div class="row text-light">
        <button @click="filterEvents('all')" class="col-2 btn btn-dark text-light">All</button>
        <button @click="filterEvents('concert')" class="col-2 btn btn-dark text-light">Concert</button>
        <button @click="filterEvents('convention')" class="col-2 btn btn-dark text-light">Convention</button>
        <button @click="filterEvents('exhibits')" class="col-2 btn btn-dark text-light">Exhibits</button>
        <button @click="filterEvents('sport')" class="col-2 btn btn-dark text-light">Sports</button>
        <button @click="filterEvents('all')" class="col-2 btn btn-dark text-light">Test</button>
      </div>
    </div>
  </div>

</template>

<script>
import { eventsService } from "../services/EventsService"
import { logger } from "../utils/Logger"


export default {



  setup() {



    return {
      async filterEvents(eventName) {
        try {
          logger.log('[EVENT NAME]', eventName)
          await eventsService.filterEvents(eventName)
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }

    }
  }
}
</script>

<style>
button:hover {
  border-bottom: 5px rgb(46, 214, 46) solid !important;
}
</style>