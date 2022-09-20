<template>
  <div></div>
    <!-- <v-row>
     <v-col>
        <div class="d-flex justify-center align-center main-container" :load="log(test)">
          <v-card class="pt-0 pr-5 pb-5 pl-5" max-width="600" :loading="loading">
            <v-alert
              v-model="hasError"
              type="error"
              transition="scroll-y-transition"
              dismissible
              >{{ error }}</v-alert
            >
            <v-card-title class="d-flex flex-column"
              ><v-img src="../../assets/gauge.jpg" max-width="300"></v-img>
              <h2 class="text-body-1"><span class="beWell">mGAUGE</span></h2></v-card-title
            >
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <label class="d-block text-left">Email</label>
                <v-text-field
                  class="pt-0"
                  v-model="username"                 
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) =>
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      'Not a valid email address',
                  ]"
                  required
                  validate-on-blur
                ></v-text-field>
                <label class="d-block text-left">Password</label>
                <v-text-field
                  class="pt-0"
                  v-model="password"
                  type="password"
                  :rules="[(v) => !!v || 'Password is required']"
                  required
                ></v-text-field>
                <p class="mt-4">
                  Forgot password?
                  <router-link to="/reset-password">Reset</router-link>
                </p>
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex flex-column">
              <v-btn
                color="var(--mh-blue)"
                @click="userLogin"
                :loading="loading"
                :disabled="loading"
                :dark="!loading"
                block
                >Login</v-btn
              >
              <v-btn
                color="var(--mh-orange)"
                @click="fedSignIn"
                :loading="loading"
                :disabled="loading"
                :dark="!loading"
                block
                >SSO</v-btn
              >
              <p class="mt-4">
                No account? <router-link to="/signup">Create Account</router-link>
              </p>
            </v-card-actions>
            <v-img class="shrink" contain src="../assets/mh-logo.png" max-width="180"></v-img>
          </v-card>
         
        </div>
      </v-col>
    </v-row> -->
  </template>
  
  <script>
  //import { mapActions, mapGetters } from "vuex";
  import { Auth } from "aws-amplify";
  
  export default {
    name: "Signin",
    data() {
      return {
        username: "",
        password: "",
        email: "",
        test: 'test',
        error: "",
        valid: true,
        hasError: false,
      };
    },
    methods: {
      /* ...mapActions(["login"]), */
      log(e){
        console.log(e)
      },
      /* fedSignIn() {
        Auth.federatedSignIn()
      }, */
      /* async userLogin() {
        if (!this.$refs.form.validate()) {
          return;
        }
  
        try {
          await this.login({
            username: this.username,
            password: this.password,
          });
  
          this.$router.push("/home");
        } catch (error) {
          this.hasError = true;
          this.error = error.message;
        }
      }, */
    },
    computed: {
      /* ...mapGetters(["loading"]), */
    },
    mounted() {
      Auth.federatedSignIn()
    }
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
  }
  .main-container {
    height: 100vh;
  }
  .beWell {
    font-family: inherit;
    font-weight: 600;
  }
  </style>
  