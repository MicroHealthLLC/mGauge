<template>
  <div id="">
   <template>    
     <amplify-authenticator class="auth-container">    
      <div>  
      <amplify-sign-out></amplify-sign-out>
     </div>
  </amplify-authenticator>
</template>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import "./styles.css"
// import Gauge from "./Gauge.vue"

export default {
  name: 'SignIn',
  // components:{
  //   Gauge
  // },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.auth-container{
  display: block !important;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

