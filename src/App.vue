<template>
  <v-app>
    <NavBar v-if="user" />
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import NavBar from "./components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar
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
