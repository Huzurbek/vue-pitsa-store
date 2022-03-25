import { createApp } from 'vue'
import App from './App.vue'
// import UniqueId from 'vue-unique-id';
import router from './router'
import store from './store'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// const app = createApp(App);
//
// app.component('Datepicker', Datepicker);

createApp(App).component('Datepicker', Datepicker).use(store).use(router).mount('#app')
