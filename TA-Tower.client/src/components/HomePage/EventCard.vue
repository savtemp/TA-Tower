<template>

  <div @click="routeToEventPage()" :style="{ backgroundImage: `url(${event.coverImg})` }" class="test text-center row">
    <div v-if="event.isCanceled == false && event.capacity > 0" class="col-12 fillBox">
    </div>
    <div v-if="event.isCanceled == false && event.capacity > 0" class="col-12 autoHeight">
      <div class="row">
        <h5 class="col-12">{{ event.name }}</h5>
        <div class="col-12">{{ event.location }}</div>
        <div class="col-12"><i class="mdi mdi-calendar"></i>{{ new Date(event.startDate).toLocaleDateString() }}</div>
        <div class="col-12 text-end"><span class="green">{{ event.capacity }}</span> spots left</div>
      </div>
    </div>
    <div v-if="event.isCanceled == true" class="col-12 autoHeightCanceled">
      <div class="row fillBox">
        <div class="col-12 ">
          <img class="img-fluid cancelled" src="src/assets/img/Cancelled.png" alt="" srcset="">
        </div>
      </div>
      <div class="row autoHeight">
        <h5 class="col-12">{{ event.name }}</h5>
        <div class="col-12">{{ event.location }}</div>
        <div class="col-12"><i class="mdi mdi-calendar"></i>{{ new Date(event.startDate).toLocaleDateString() }}
        </div>
        <div class="col-12 text-end"><span class="green">{{ event.capacity }}</span> spots left</div>
      </div>
    </div>
    <div v-if="event.capacity == 0" class="col-12 autoHeightCanceled">
      <div class="row fillBox">
        <div class="col-12 ">
          <img class="img-fluid soldOut" src="src/assets/img/Sold_Out.png" alt="" srcset="">
        </div>
      </div>
      <div class="row autoHeight">
        <h5 class="col-12">{{ event.name }}</h5>
        <div class="col-12">{{ event.location }}</div>
        <div class="col-12"><i class="mdi mdi-calendar"></i>{{ new Date(event.startDate).toLocaleDateString() }}
        </div>
        <div class="col-12 text-end"><span class="red">{{ event.capacity }}</span> spots left</div>
      </div>
    </div>
  </div>


</template>

<script>
import { useRouter } from "vue-router"
import Pop from "../../utils/Pop"


export default {
  props: {
    event: {
      type: Object, required: true
    }
  },


  setup(props) {
    const router = useRouter()


    return {
      routeToEventPage() {
        try {
          console.log('[EVENT PROPS]', props.event.id)
          const eventId = props.event.id
          router.push({ name: 'Event', params: { id: eventId } })
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }
    }
  },
}
</script>

<style scoped>
.test {
  background-size: cover;
  background-repeat: no-repeat;
  height: 30Vh;
  width: auto;
  margin-top: 5vh;
  margin-left: .1px;
  margin-right: .1px;
  border-radius: 3%;
}

.fillBox {
  height: 55%;
}

.autoHeight {
  height: 45%;
  text-align: start;
  background: rgba(255, 255, 255, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  color: white;
  text-shadow: 2px 1px 2px black;
}

.autoHeightCanceled {
  height: 100%;
  text-align: start;
  background: rgba(255, 255, 255, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  color: white;
  text-shadow: 2px 1px 2px black;
  position: static;
}

.green {
  color: #56c7fb;
}

.red {
  color: #fb5656;
}

.cancelled {
  z-index: 100;
  position: absolute;
  height: 75%;
  width: 90%;
  top: 10%;
}

.soldOut {
  z-index: 100;
  position: absolute;
  height: 75%;
  width: 90%;
  top: 10%;
}
</style>