<template>
    <v-app>
        <v-row justify="end" align="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <div>
                    <v-menu>
                        <template v-slot:activator="{ on: menu, attrs }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-btn color="primary" dark v-bind="attrs" v-on="{ ...tooltip, ...menu }">Mostrar / Ocutar Componentes</v-btn>
                                </template>
                                <span>Componentes</span>
                            </v-tooltip>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in view" :key="index" >
                                <v-list-item-title>
                                    <v-checkbox v-model="item.value" :label="item.name"></v-checkbox>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[0].value" >
                <magnitudes />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[1].value" >
                <acreditaciones />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[2].value" >
                <condicion-de-pago />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[3].value" >
                <metodo-de-pago />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[4].value" >
                <tiempo-de-entrega />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[5].value" >
                <ciudad-estado-pais />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[6].value" >
                <moneda />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[7].value" >
                <empleado />
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import magnitudesComponent from './magnitudes/magnitudesComponent.vue'
import acreditacionesComponent from './acreditaciones/indexAcreditacionesComponent.vue'
import condicionDePagoComponent from './condicionesDePago/indexCondicionesDePagoComponent.vue'
import MetodoDePagoComponent from './metodoDePago/indexMetodoDePagoComponent.vue'
import TiempoDeEntregaComponent from './tiempoDeEntrega/indexTiempoDeEntregaComponent.vue'
import CiudadEstadoPaisComponent from './CiudadEstadoPais/indexCiudadEstadoPaisComponent.vue'
import MonedaComponent from './Moneda/indexMonedaComponent.vue'
import EmpleadoComponent from './empleado/indexEmpleadoComponent.vue'
export default {
    components: {
        'magnitudes': magnitudesComponent,
        'acreditaciones': acreditacionesComponent,
        'condicion-de-pago': condicionDePagoComponent,
        'metodo-de-pago': MetodoDePagoComponent,
        'tiempo-de-entrega': TiempoDeEntregaComponent,
        'ciudad-estado-pais': CiudadEstadoPaisComponent,
        'moneda': MonedaComponent,
        'empleado': EmpleadoComponent,
    },
    data() {
        return {
            view: [
                { value: false , name: 'Magnitudes' },
                { value: false , name: 'moneda' },
                { value: false , name: 'Metodo de pago' },
                { value: false , name: 'Condicion de pago' },
                { value: false , name: 'Timepo de de Entrega' },
                { value: false , name: 'Ciudad / Estado / Pais' },
                { value: false , name: 'Moneda' },
                { value: true , name: 'Empleados' },

            ],
            ver_todo: true,
        }
    }
};

</script>
