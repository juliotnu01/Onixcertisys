require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store  from './plugins/store'
import router from './plugins/routes'
import Donut from 'vue-css-donut-chart';
import VueApexCharts from 'vue-apexcharts'
import 'vue-css-donut-chart/dist/vcdonut.css';


Vue.use(Donut);
Vue.use(VueApexCharts)

Vue.component('register-component', require('./components/register_component.vue').default)
Vue.component('login-component', require('./components/login_component.vue').default)
Vue.component('app', require('./components/app.vue').default)
Vue.filter('numberFormat', function (value, moneda = '') {
    if (!value) return ''
    let parseNumber = parseFloat(value)
    return  ` ${moneda} ${new Intl.NumberFormat("de-DE").format(parseNumber)}`
})
const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify,
});
