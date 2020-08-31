require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify.js'
import { store } from './plugins/store.js'
import route from './plugins/routes.js'

Vue.component('login-component', require('./components/login_component.vue').default)

const app = new Vue({
    el: '#app',
    store,
    route,
    vuetify,
});
