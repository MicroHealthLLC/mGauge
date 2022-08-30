<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12 pb-0">
        <v-img
          :src="require('../assets/gauge.jpg')"
          class="mt-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4 pt-0 mt-0">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to mGauge
        </h1>

        <p class="subheading font-weight-regular">
          An organizational performance tool to gauge, track,<br> and manage your teams performance. 
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Learn More</a>
        </p>
      </v-col>
<!-- <Gauge></Gauge> -->
    </v-row>

    <SignIn></SignIn>
  </v-container>
</template>

<script>
import SignIn from "./SignIn.vue"
// import Gauge from "./Gauge.vue"

  export default {
    name: 'HelloWorld',
    components:{
      SignIn,
      // Gauge
    },

  }
</script>
