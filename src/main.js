import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';




//Amplify.configure(awsconfig);
/* Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_0Vp4RyDfv",
    userPoolWebClientId: "5s6qdcfo4vifvprcu2fld5orj1",
    oauth: {
      domain: "gauge-dev.auth.us-east-1.amazoncognito.com",
      scope: ["email", "openid", "phone", "aws.cognito.signin.user.admin"],
      redirectSignIn: "http://localhost:8081/",
      redirectSignOut: "http://localhost:8081/",
      responseType: "code"
    }
  },
  API: {
    endpoints: [
      {
        endpoint: "https://mhtest1.auth.us-east-1.amazoncognito.com/saml2/idpresponse"
      }
    ]
  }
}); */
Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_mgCjGj4q2",
    userPoolWebClientId: "5g5osv7n7o5jqhaqe36b8mvddb",
    oauth: {
      domain: "mhtest1.auth.us-east-1.amazoncognito.com",
      scope: ["email", "openid", "phone", "aws.cognito.signin.user.admin"],
      redirectSignIn: "http://localhost:8080/",
      redirectSignOut: "http://localhost:8080/",
      responseType: "code"
    }
  },
  API: {
    endpoints: [
      {
        endpoint: "https://mhtest1.auth.us-east-1.amazoncognito.com/saml2/idpresponse"
      }
    ]
  }
});

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];
Vue.config.productionTip = false
Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: "mdi",
});

new Vue({  
  router,
  store, 
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
