<template>

  <div class="row my-5 d-flex justify-content-center newHeight">
    <div class="col-11 text-light">
      <div class="row text-light">
        <button @click="filterEvents('all')" class="col-2 btn text-light">All</button>
        <button @click="filterEvents('concert')" class="col-2 btn text-light">Concert</button>
        <button @click="filterEvents('convention')" class="col-2 btn text-light">Convention</button>
        <button @click="filterEvents('exhibits')" class="col-2 btn text-light">Exhibits</button>
        <button @click="filterEvents('sport')" class="col-2 btn text-light">Sports</button>
        <button @click="filterEvents('all')" class="col-2 btn text-light rightButton">Test</button>
      </div>
    </div>
  </div>

</template>

<script>
import { eventsService } from "../../services/EventsService"
import { logger } from "../../utils/Logger"


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

<style scoped>
button:hover {
  border-bottom: 5px rgb(46, 214, 46) solid !important;
  border-left: 1px black solid !important;

}

button {
  text-shadow: 1px 1px 1px black;
  border-left: 1px black solid;
  background-color: #474C61;
  border-radius: 0%;
}

button:active {
  background-color: white !important;
}

.rightButton {
  border-right: 1px black solid
}

.rightButton:hover {
  border-right: 1px black solid
}

.newHeight {
  height: 7vh;
}
</style>