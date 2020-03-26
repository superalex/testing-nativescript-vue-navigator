import Vue from 'nativescript-vue';

import App from './components/App';

import Navigator from 'nativescript-vue-navigator'
import { routes } from './routes'
Vue.use(Navigator, { routes })

new Vue({
    render: h => h(App),
}).$start();