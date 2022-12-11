<template>

  <div class="row mt-4 mb-3">
    <div class="col-2 ">
      <img class="img-fluid avatar" :src="comment.creator.picture" alt="" srcset="">
    </div>
    <div class="col-10 commentBg">
      <div class="row">
        <div class="col-4">
          <h5>{{ comment.creator.name }}</h5>
        </div>
        <div v-if="comment.isAttending == true" class="col-4">
          <h5 class="isAttending">Is attending</h5>
        </div>
        <div class="col-12">
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";


export default {
  props: {
    comment: {
      type: Object, required: true
    }
  },


  setup() {



    return {

    }
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  box-shadow: 2px 2px 5px black;
}

.commentBg {
  background-color: white;
  color: black;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
}

.isAttending {
  color: blue;
}
</style>