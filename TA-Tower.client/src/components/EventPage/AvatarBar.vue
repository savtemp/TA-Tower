<template>


  <div class="col-1">
    <p class="p-0 m-2">
      <img class="img-fluid avatar" :src="ticketHolder?.profile?.picture" :title="ticketHolder?.profile.name" alt="">
    </p>
  </div>
</template>

<script>



export default {
  props: {
    ticketHolder: {
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
  height: 50px;
  align-items: center;
}
</style>