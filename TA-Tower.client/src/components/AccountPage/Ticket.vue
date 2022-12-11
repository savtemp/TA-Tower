<template>

  <div v-if="ticket.event.isCanceled == false" class="row ticket my-4">
    <div class="circle"></div>
    <div class="col-4">
      <div class="row">
        <div class="col-12 p-0">
          <img class="" :src="ticket.event.coverImg" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="col-8">
      <div class="row">
        <div class="col-12 my-3">
          <h5>{{ ticket.event.name }}</h5>
        </div>
        <div class="col-12 mt-2">
          <h6>{{ ticket.event.location }}</h6>
        </div>
        <div class="col-12">
          <h6><i class="mdi mdi-calendar"></i>&nbsp;{{ new Date(ticket.event.startDate).toLocaleDateString() }}</h6>
        </div>
      </div>
    </div>
  </div>
  <div v-if="ticket.event.isCanceled == true" class="row ticket mt-5">
    <div class="col-4">
      <div class="row">
        <div class="col-12 p-0">
          <img class="" :src="ticket.event.coverImg" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="col-8">
      <div class="row">
        <div class="col-12">
          <h5>{{ ticket.event.name }}</h5>
        </div>
        <div class="col-12">
          <h6>{{ ticket.event.location }}</h6>
        </div>
        <div class="col-12">
          <h6>{{ new Date(ticket.event.startDate).toLocaleDateString() }}</h6>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: { ticket: { type: Object, required: true } },


  setup() {



    return {

    }
  }
}
</script>

<style scoped>
.ticket {
  height: 25vh;
  width: auto;
  background-color: #474C61;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
  position: relative;
  color: white;
  text-shadow: 2px 2px 2px black;
}

.circle {
  border-radius: 50%;
  background-color: #2A2D3A;
  position: absolute;
  height: 110px;
  width: 110px;
  right: -10%;
  top: 23%;
  box-shadow: -3px 0px 0px black;
}

img {
  height: 25vh;
  width: auto;
  border-radius: 5px;
}
</style>