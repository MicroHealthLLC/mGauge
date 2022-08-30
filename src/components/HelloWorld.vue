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
<Gauge></Gauge>
      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>

    <SignIn></SignIn>
  </v-container>
</template>

<script>
import SignIn from "./SignIn.vue"
import Gauge from "./Gauge.vue"

  export default {
    name: 'HelloWorld',
    components:{
      SignIn,
      Gauge
    },

  }
</script>
