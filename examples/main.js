import Vue from "vue";
import App from "./App.vue";
import Toast from '../src/toast'

Vue.config.productionTip = false;

Vue.prototype.$toast = new Toast()

new Vue({
  render: h => h(App)
}).$mount("#app");
