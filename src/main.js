import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import clickOutside from "./directives/clickOutside"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
dom.watch();
library.add(fas, far, fab)
const app = createApp(App);
const axios_instance = axios.create({
    baseURL: '',
    headers: {},
    withCredentials: true,
});
app.config.globalProperties.$http = axios_instance;
store.$http = axios_instance;
app.directive("click-outside",clickOutside)
app
.use(VueAxios, axios)
.use(store)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
