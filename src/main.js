import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

import '@fortawesome/fontawesome-free/js/all.js'

/* import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

 Vue.use(VueAxios, axios) */


createApp(App).use(store).use(router).mount('#app')
