import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// ports
const vuePort = 3000;
const expPort = 8888;
const expUrl = `http://localhost:${expPort}`;

// before enter
const { href } = window.location;
if (href.match(expUrl)) {
  // redirect node to vue
  window.location.href = href.replace(expPort, vuePort);
} else {
  // vue setting
  Vue.config.productionTip = false;
  Vue.prototype.$inDev = (process.env.NODE_ENV === 'development');
  Vue.prototype.$vuePort = vuePort;
  Vue.prototype.$expPort = expPort;
  Vue.prototype.$expUrl = expUrl;
  // vue init
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}
