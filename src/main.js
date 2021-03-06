import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
// import axios from "axios";

Vue.config.productionTip = false;
// Vue.use(axios);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
