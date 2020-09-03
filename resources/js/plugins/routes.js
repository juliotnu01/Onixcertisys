import Vue from 'vue'
import router from 'vue-router'
import homeComponent from '../components/home_component.vue'
Vue.use(router)
export default new router ({
    mode:'history',
    base: '/home/',
    routes: [
    	{path: '', name: 'home.component' , component: homeComponent}
    ]
})
