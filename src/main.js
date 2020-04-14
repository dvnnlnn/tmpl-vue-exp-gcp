import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// ports
const clientPort = 3000;
const serverPort = 8888;
const serverUrl = `http://localhost:${serverPort}`;

// global variables
window.inDev = process.env.NODE_ENV === 'development';

// before enter
const { href } = window.location;
if (window.inDev && href.match(serverUrl)) {
  // redirect to client port
  window.location.href = href.replace(serverPort, clientPort);
} else {
  // global variable
  window.inDev = (process.env.NODE_ENV === 'development');
  // vue config
  Vue.config.productionTip = false;
  // vue init
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}
