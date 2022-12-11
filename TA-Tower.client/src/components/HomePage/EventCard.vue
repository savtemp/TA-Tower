<template>

  <div @click="routeToEventPage()" :style="{ backgroundImage: `url(${event.coverImg})` }" class="test text-center row">
    <div class="col-12 fillBox">
    </div>
    <div class="col-12 autoHeight">
      <div class="row">
        <h5 class="col-12">{{ event.name }}</h5>
        <div class="col-12">{{ event.location }}</div>
        <div class="col-12"><i class="mdi mdi-calendar"></i>{{ new Date(event.startDate).toLocaleDateString() }}</div>
        <div class="col-12 text-end"><span class="green">{{ event.capacity }}</span> spots left</div>
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

.green {
  color: #56c7fb;
}
</style>