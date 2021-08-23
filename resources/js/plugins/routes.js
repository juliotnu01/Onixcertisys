import Vue from "vue";
import router from "vue-router";
import homeComponent from "../components/home_component.vue";
import configComponent from "../components/config/indexComponent.vue";
import configUserComponent from "../components/config/configUser/config_user_component.vue";
import empresaComponent from "../components/config/empresa/empresaComponent.vue";
import datosDelSistemaComponent from "../components/config/datosGenerales/indexDatosGeneralesComponent.vue";
import userServices from '../services/userServices.js'
import store from './store.js'

Vue.use(router);
export default new router({
    mode: "history",
    base: "/home/",
    routes: [
        {
            path: "/",
            name: "home.component",
            component: homeComponent,
            beforeEnter: (to, from, next) => {
                next();
            }
        },
        {
            path: "/config",
            name: "config",
            component: configComponent,
            children: [
                {
                    path: "/",
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
            redirect: { name: "config-user" }
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
            path: "/ordenes-de-servicios",
            name: "home.recibos",
            component: () =>
                import("../components/recibo/indexReciboComponent.vue")
        },
        {
            path: "/laboratorio",
            name: "home.laboratorio",
            component: () =>
                import(
                    "../components/laboratorio/indexComponentLaboratorio.vue"
                )
        },
        {
            path: "/calidad",
            name: "home.calidad",
            component: () =>
                import(
                    "../components/calidad/indexComponentCalidad.vue"
                )
        },
        {
            path: "/factura",
            name: "home.factura",
            component: () =>
                import("../components/factura/indexComponentfactura.vue")
        },
        {
            path: "/administrar-facturas",
            name: "home.administrar.facturas",
            component: () =>
                import("../components/administrarFactura/indexComponentAdminsitrarFactura.vue")
        },
        {
            path: "/cliente",
            name: "home.cliente",
            component: () =>
                import("../components/cliente/indexClienteComponent.vue")
        },
        {
            path: "/reportes",
            name: "home.reportes",
            component: () =>
                import("../components/reportes/indexReportesComponents.vue")
        },
        {
            path: "/add-cliente",
            name: "home.cliente.add-cliente",
            component: () =>
                import(
                    "../components/cliente/agregar_cliente/indexComponentAgregarCliente.vue"
                )
        }
    ]
});
