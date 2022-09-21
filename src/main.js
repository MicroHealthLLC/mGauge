import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

let baseUrl = "https://dev.d30t19km7frel7.amplifyapp.com/"

if (process.env.NODE_ENV == 'development'){
  baseUrl = "http://localhost:8080/"
}

// Amplify.configure(awsconfig);
Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://iy2ubtn5onhr5pmqpcxnvdfo3m.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  "aws_appsync_dangerously_connect_to_http_endpoint_for_testing": true,
  Auth: {
    region: "us-east-1",
    identityPoolId: "us-east-1:1fb6483e-c25d-4a1c-908a-f1c7a5389045",
    userPoolId: "us-east-1_mgCjGj4q2",
    userPoolWebClientId: "5g5osv7n7o5jqhaqe36b8mvddb",
    oauth: {
      domain: "mhtest1.auth.us-east-1.amazoncognito.com",
      scope: ["email", "openid", "phone", "aws.cognito.signin.user.admin"],
      redirectSignIn: `${baseUrl}`,
      redirectSignOut: `${baseUrl}`,
      responseType: "code"
    }
  },
  API: {
    endpoints: [
      {
        endpoint: "https://mhtest1.auth.us-east-1.amazoncognito.com/saml2/idpresponse",
        // aws_appsync_graphqlEndpoint: "https://ENDPOINT_GRAPHQL.com/graphql",
        // aws_appsync_region: "us-east-1",
        // aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
        // aws_appsync_dangerously_connect_to_http_endpoint_for_testing: true
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
