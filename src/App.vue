<template>
  <v-app>
    <NavBar />
    <v-main>
      <Gauge />
      <SignIn />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Gauge from './components/Gauge.vue';
import SignIn from './components/SignIn.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    SignIn,
    Gauge
  },

  data: () => ({
    //
  }),
};
</script>
