<template>
  <div v-if="event" class="mt-5">
    <div :style="{ backgroundImage: `url(${event.coverImg})` }" class="row rowHeight mx-auto">
      <div class="col-12 text-light autoHeight">
        <div class="row">
          <div class="col-4">
            <img class="img-fluid my-4" :src="event.coverImg" alt="" srcset="">
          </div>
          <div class="col-8">
            <div class="row headerHeight">
              <div v-if="event.creatorId == account.id" class="col-12 text-end">
                <button class="btn"><i class="mdi mdi-dots-horizontal"></i></button>
              </div>
              <div class="col-6 text-start">
                <span class="">{{ event.name }}</span>
              </div>
              <div class="col-6 text-end">
                <span class="">{{ new
                    Date(event.startDate).toDateString('en-us')
                }}</span>
              </div>
              <div class="col-6 text-start">
                <h6>{{ event.location }}</h6>
              </div>
              <div class="col-6 text-end">
                <span class="">Starting at {{ new
                    Date(event.startDate).toLocaleTimeString('en-us')
                }}</span>
              </div>
            </div>
            <div class="row bodyHeight">
              <div class="col-12 mt-5">
                <p>{{ event.description }}</p>
              </div>
            </div>
            <div class="row fillerHeight">
            </div>
            <div class="row footerHeight">
              <div class="col-6 text-start">
                <h6><span class="blue">{{ event.capacity }}</span> tickets left.</h6>
              </div>
              <div class="col-6 text-end">
                <button class="btn btn-warning">Attend <i class="mdi mdi-account-check"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../../AppState";


export default {



  setup() {



    return {
      event: computed(() => AppState.activeEvent),
      account: computed(() => AppState.account)
    }
  }
}

</script>

<style scoped>
.rowHeight {
  height: 55vh;
  width: 100%;
  background-position: center;
  object-fit: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 10px;
  position: relative;
  box-shadow: 5px 35px 10px black;
}

.autoHeight {
  background: rgba(59, 50, 97, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  color: white;
  text-shadow: 2px 1px 2px black;
}


.headerHeight {
  height: 10%;
}

.bodyHeight {
  height: 50%
}

.fillerHeight {
  height: 25%;
}

.footerHeight {
  height: 15%;
}

.blue {
  color: #56c7fb;
}
</style>