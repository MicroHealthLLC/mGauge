<template>
  <v-app>
    <NavBar v-if="user" />
    <v-main class="main-wrapper" app>
      <WelcomePage v-if="$route.name == 'Home'" />
      <!-- Router Container -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import WelcomePage from "./components/WelcomePage.vue";
import NavBar from "./components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
    WelcomePage
},
data: () => ({
    //
}),
methods: {
    ...mapActions(["fetchCurrentUser"]),
    ...mapMutations(["CLOSE_SNACKBAR"]),
  },
computed: {
    ...mapGetters(["snackbar", "user"]),
 
  },
  async mounted() {
    await this.fetchCurrentUser();
    if (this.user) {
      console.log(this.user)
      console.log(`Env: ${process.env.NODE_ENV}`)
    }  
  },


};
</script>



<style>
:root {
  --mh-blue: #1d336f;
  --mh-green: #9ec64c;
  --mh-orange: #dd9036;
}

</style>
