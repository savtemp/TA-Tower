<template>

  <div class="mt-4 row d-flex justify-content-center">
    <div class="col-11 eventBackground text-light">
      <div class="row">
        <div class="col-5 offset-4">
          <h1 class="textShadow">BUY YOUR TICKETS NOW!!!!</h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {



  setup() {



    return {

    }
  }
}
</script>

<style scoped>
.eventBackground {
  background-image: url(https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 30vh;
  box-shadow: 3px 3px 3px black;
}

.textShadow {
  text-shadow: 3px 3px 3px black;
  color: antiquewhite;
  font-size: 3rem;
  margin-top: 16%;
}
</style>