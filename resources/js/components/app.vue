<template>
    <v-app id="inspire">
        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#fff">
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <router-link to="/"><v-img :src="`${root}/img/login-logo.png`" width="200"/></router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon large v-bind="attrs" v-on="on">
                        <v-avatar size="32px" item>
                            {{user.name}}
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item >
                            <v-list-item-avatar>
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title><v-icon small>mdi-account</v-icon>{{user.name}}</v-list-item-title>
                                <v-list-item-subtitle><v-icon small>mdi-email</v-icon>{{user.email}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn icon>
                            <router-link :to="{ path: 'config-user' }">
                                <v-icon>mdi-cog</v-icon>
                            </router-link>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="logout">Cerrar Sesion</v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </v-app-bar>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row>
                    <v-col cols="12">
                        
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        root: {
            type: String
        },
        authusr: {
            type: Object
        },
    },
    mounted(){
        this.determinateUser(this.authusr)
    },
    data() {
        return {
            menu: false,
            dialog: false,
            drawer: null,
            items: [
                { icon: '', text: 'Inicio' },
                {
                    icon: '',
                    text: 'Catálogos',
                    children: [
                        { text: 'Magnitudes' },
                        { text: 'Acreditaciones' },
                        { text: 'Clientes' },
                        { text: 'Condiciones de Pago' },
                        { text: 'Método de pago' },
                        { text: 'Referencia de pago de pago' },
                        { text: 'Tiempo de entrega' },
                        { text: 'Ciudades' },
                        { text: 'Estados' },
                        { text: 'Empleados' },
                        { text: 'Departamentos' },
                        { text: 'Puestos' },
                        { text: 'Moneda' },
                        { text: 'Instrumentos' },
                        { text: 'Procedimientos' },
                        { text: 'Patrones' },
                    ],
                },
                {
                    icon: '',
                    text: 'Ventas',
                    children: [
                        { text: 'Cotizaciones' },
                        { text: 'Orden de Servicio' },
                        { text: 'Recepción' },
                    ],
                },
                {
                    icon: '',
                    text: 'Laboratorio',
                    children: [
                        { icon: 'mdi-plus', text: 'Asigna Tecnico' },
                        { icon: 'mdi-plus', text: 'Producción' },
                    ],
                },
                {
                    icon: '',
                    text: 'Calidad',
                    children: [
                        { text: 'Revisa Informes' },
                    ],
                },
                {
                    icon: '',
                    text: 'Facturación',
                    children: [
                        { text: 'Nueva Factura' },
                        { text: 'Administrar Facturas' },
                        { text: 'Nueva Factura Libre' },
                        { text: 'Administrar Facturas Libres' },
                        { text: 'Complemento de pago' },
                    ],
                },
                { icon: '', text: 'Kardex' },
            ],
        }
    },
    computed:{
        ...mapGetters(['services', 'user'])
    },
    methods:{
        async logout(){
            this.services.userServices.logoutUsr()
        },
        async determinateUser(usr){
            this.services.userServices.itExistUsr(usr)  
        }
    }
};

</script>
