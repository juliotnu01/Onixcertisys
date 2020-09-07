import Vue from 'vue'
import router from 'vue-router'
import homeComponent from '../components/home_component.vue'
import configComponent from '../components/config/indexComponent.vue'
import configUserComponent from '../components/config/configUser/config_user_component.vue'
Vue.use(router)
export default new router({
    mode: 'history',
    base: '/home/',
    routes: [{
            path: '/',
            name: 'home.component',
            component: homeComponent
        },
        {
            path: '/config',
            name: 'config',
            component: configComponent,
            children: [{
                path: '/',
                name: 'config-user',
                component: configUserComponent
            }]
        }
    ]
})
