<template>
    <!-- <header></header> -->

    <main class="d-flex">
        <section class="m-3">
            <router-link :to="{ name: 'Home' }">
              <!-- <div class="d-flex flex-column align-items-center mt-3"> -->
                <img alt="logo" src="src/assets/img/TowerLogo.png" height="45" />
              <!-- </div> -->
            </router-link>
          <router-view />
        </section>

        <section class="row nav-gradient py-5">
          <Navbar class="top-gradient"  />
        </section>
  </main>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Global/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>


<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

main{
  overflow-x: hidden;
}

.top-gradient{
  background-image: #474C61;
}

.nav-gradient{
  background-image: linear-gradient(#474C61, #2A2D3A);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
