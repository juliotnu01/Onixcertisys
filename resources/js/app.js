require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store  from './plugins/store'
import router from './plugins/routes'
import VueApexCharts from 'vue-apexcharts'
import VueToastr2 from 'vue-toastr-2'
import VueSweetalert2 from 'vue-sweetalert2';
import 'vue-css-donut-chart/dist/vcdonut.css';
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 
window.toastr = require('toastr')
 
Vue.use(VueToastr2)
Vue.use(VueSweetalert2);

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';




Vue.use(VueApexCharts)

Vue.component('register-component', require('./components/register_component.vue').default)
Vue.component('login-component', require('./components/login_component.vue').default)
Vue.component('app', require('./components/app.vue').default)
Vue.filter('numberFormat', function (value, moneda = '') {
    if (!value) return ''
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return `${moneda} ${parseFloat(value).toFixed(2).toString().replace(exp,rep)}`
})
const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify,
});
