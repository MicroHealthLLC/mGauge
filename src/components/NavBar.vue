<template>
  <div>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/mh-logo.png"
          transition="scale-transition"
          width="180"
        />      
      </div>
      <v-spacer></v-spacer>
      <v-navigation-drawer v-model="drawer" temporary app>
      <!-- <v-list dense>
        <v-list-item-group color="var(--mh-orange)"> -->
          <!-- <v-list-item to="/" link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>          -->
          <!-- <v-list-item to="/events" link>
            <v-list-item-icon>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Events</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        <!-- </v-list-item-group>
      </v-list> -->
      <template v-slot:append>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item to="/profile" color="var(--mh-orange)" link>
            <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-content
              ><v-list-item-title>Profile</v-list-item-title>
              <!-- <v-list-item-subtitle>{{
                user.attributes.email
              }}</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="pa-2">
          <v-btn @click="logOutUser" color="var(--mh-blue)" block dark>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
    async logOutUser() {
      await this.logout();
      this.$router.push("/signin");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
a.v-tab {
  text-transform: capitalize;
}
.hidden-block {
  width: 48px;
}
</style>
