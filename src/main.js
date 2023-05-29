import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/static/css/index.css";
import router from "../src/router";
import VueRouter from "vue-router";
import "../src/css/index.css";

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
