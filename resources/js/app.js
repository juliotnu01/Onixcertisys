require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store  from './plugins/store'
import router from './plugins/routes'

Vue.component('register-component', require('./components/register_component.vue').default)
Vue.component('login-component', require('./components/login_component.vue').default)
Vue.component('app', require('./components/app.vue').default)
const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify,
});
