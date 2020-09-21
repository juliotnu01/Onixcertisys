import Vue from "vue";
import router from "vue-router";
import homeComponent from "../components/home_component.vue";
import configComponent from "../components/config/indexComponent.vue";
import configUserComponent from "../components/config/configUser/config_user_component.vue";
import empresaComponent from "../components/config/empresa/empresaComponent.vue";
import datosDelSistemaComponent from "../components/config/datosGenerales/indexDatosGeneralesComponent.vue";
Vue.use(router);
export default new router({
    mode: "history",
    base: "/home/",
    routes: [
        {
            path: "/",
            name: "home.component",
            component: homeComponent
        },
        {
            path: "/config",
            name: "config",
            component: configComponent,
            children: [
                {
                    path: "",
                    name: "config-user",
                    component: configUserComponent
                },
                {
                    path: "/config/empresa",
                    name: "config-empresa",
                    component: empresaComponent
                },
                {
                    path: "/config/datos-del-sistema",
                    name: "config.datos.sistema",
                    component: datosDelSistemaComponent
                }
            ],
            redirect: { name: 'config-user' }
        },
        {
            path: "/cotizaciones",
            name: "home.cotizaciones",
            component: () =>
                import(
                    "../components/cotizaciones/indexCotizacionesComponent.vue"
                )
        },
        {
            path: "/Recibos",
            name: "home.recibos",
            component: () =>
                import(
                    "../components/recibo/indexReciboComponent.vue"
                )
        }
    ]
});
