<template>
  <v-sheet class="welcome-card" dark app>
    <div class="overlay">
    <v-container>
    <v-row class="text-center">
      <v-col cols="12 pb-0">
        <!-- Fix: gaugePic class should give image a border-radius  -->
        <span class="gaugePic">
          <v-img
          :src="require('../assets/gauge.jpg')"
          class="my-3"
          contain
          height="125"
        />
        </span>        
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
    </v-row>  
  </v-container>
  </div>
  </v-sheet>

</template>

<script>
export default {
  name: "WelcomePage",

  methods: {
 
  },
};

</script>

<style scoped>
.gaugePic{
  border-radius: 1rem;
}
.overlay{
  background-color: rgba(0,	0, 0, 0.60);
  height: 65vh;
  }
.welcome-card {
   background: url(../assets/racing-team.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; 
  background-size: cover;
  /* min-height: 100%; */
  min-width: 1024px;
  width: 100%;
  min-height: 65vh;
}
.mh-message {
  text-align: left;
  padding: 5px 10px;
  border-radius: .75rem;
  background-color: rgba(221,	144,	54, 0.15);
  border: solid .5px rgba(221,	144,	54, 0.35);
}
.mh-message:hover {
  background-color: rgba(221,	144,	54, 0.35);
}
 .mhG{
  color: var(--mh-green);
 }
 .mhB{
  color: var(--mh-blue);
 }
.cta{
  width: 40%;
  position: absolute;
  bottom: 3%;
  left: 3%;
  -webkit-text-stroke-width: .35px;
  -webkit-text-stroke-color: black;
}
.ctaRight{
  position: absolute;
  bottom: 2.5%;
  right: 3%;

}
.text-h4{
	-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.header{
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: normal !important;
}

.ctaBtn{
  font-size: 1.55rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  cursor: pointer;
}
</style>


<script>
// import SignIn from "./SignIn.vue"
// import Gauge from "./Gauge.vue"

  export default {
    name: 'HelloWorld',
    components:{
      // SignIn,
      // Gauge
    },

  }
</script>
