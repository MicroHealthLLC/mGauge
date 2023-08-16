import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';
import awsExports from './aws-exports2';
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';




Amplify.configure(awsExports);

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
