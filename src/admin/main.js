import Vue from 'vue';
import App from './App.vue'
import router from "./router";
import SimpleVueValidator from 'simple-vue-validator';
Vue.use(SimpleVueValidator, {mode: 'manual'});


new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});