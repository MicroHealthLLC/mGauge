import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router';
    
// Vue.use(VueRouter);
// import VueSpeedometer from "vue-speedometer"

Amplify.configure(awsconfig);

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
  vuetify,
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
