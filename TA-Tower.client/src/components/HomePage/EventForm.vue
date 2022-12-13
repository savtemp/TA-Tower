<template>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Create A New Event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="row justify-content-center modal-body">
        <form action="" @submit.prevent="createEvent">
          <div class="my-1">
            <label for="Event Name">Event Name</label>
            <input class="form-control" type="text" v-model="editable.name">
          </div>
          <div class="my-1">
            <label for="Event Description">Event Description</label>
            <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="editable.description"></textarea>
          </div>
          <div class="my-1">
            <label for="Event Cover-Image">Event Cover-Image</label>
            <input class="form-control" type="url" v-model="editable.coverImg">
            <img class="img-fluid" :src="editable.coverImg" alt="">
          </div>
          <div class="my-1">
            <label for="Event Location">Event Location</label>
            <input class="form-control" type="text" v-model="editable.location">
          </div>
          <div class="my-1">
            <label for="Event Capacity">Event Capacity</label>
            <input class="form-control" type="number" v-model="editable.capacity">
          </div>
          <div class="my-1">
            <label for="Event Start Date">Event Start Date</label>
            <input class="form-control" type="date" v-model="editable.startDate">
          </div>
          <div class="my-1">
            <label for="Event Type">Event Type</label>
            <!-- TODO import drop down from bootstrap and add v-model -->
            <input class="form-control" type="text">
          </div>
          <div class="my-3 text-end">
            <button class="btn btn-success" type="submit">Create Event</button>
          </div>
        </form>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>

</template>


<script>
// import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from '../../utils/Pop.js';
import { eventsService } from '../../services/EventsService.js';
export default {
  setup(){
    const editable = ref({})

  return {  
    editable,

    async createEvent(){
      try {
        await eventsService.createEvent(editable.value)
      } catch (error) {
        console.error(error)
       // @ts-ignore 
        Pop.error(('[CREATE EVENT]'), error.message)
      }
    }
  }
  }
};
</script>


<style lang="scss" scoped>

</style>