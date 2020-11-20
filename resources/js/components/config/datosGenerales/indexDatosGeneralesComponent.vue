<template>
<v-app>
    <v-row justify="end" align="center">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <div>
                <v-menu :offset-y="true">
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn color="primary" dark v-bind="attrs" v-on="{ ...tooltip, ...menu }">Mostrar / Ocutar Componentes</v-btn>
                            </template>
                            <span>Componentes</span>
                        </v-tooltip>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in view" :key="index">
                            <v-list-item-title>
                                <v-checkbox v-model="item.value" :label="item.name"></v-checkbox>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu :offset-y="true">
                    <template v-slot:activator="{ on:  attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn color="primary" dark v-bind="attrs" v-on="{ ...tooltip}" @click="MostrarOcultarTodo">
                                    <v-icon>mdi-eye</v-icon>
                                </v-btn>
                            </template>
                            <span>Ocultar Todo</span>
                        </v-tooltip>
                    </template>
                </v-menu>

            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[0].value">
            <magnitudes />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[1].value">
            <acreditaciones />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[2].value">
            <condicion-de-pago />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[3].value">
            <metodo-de-pago />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[4].value">
            <tiempo-de-entrega />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[5].value">
            <ciudad-estado-pais />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-show="view[6].value">
            <moneda />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[7].value">
            <empleado />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[8].value">
            <cliente />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[9].value">
            <instrumento />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[10].value">
            <procedimiento />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-show="view[11].value">
            <patron />
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
import clienteComponent from './cliente/indexClientecomponent.vue'
import InstrumentoComponent from './instrumento/indexInstrumentoComponent.vue'
import procedimientoComponent from './procedimiento/indexProcedimientoComponent.vue'
import patronComponent from './patron/indexPatronComponent.vue'
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
        'cliente': clienteComponent,
        'instrumento': InstrumentoComponent,
        'procedimiento': procedimientoComponent,
        'patron': patronComponent,
    },
    data() {
        return {
            view: [{
                    value: true,
                    name: 'Magnitudes'
                },
                {
                    value: true,
                    name: 'Acreditaciones'
                },
                {
                    value: true,
                    name: 'Condicion de pago'
                },
                {
                    value: true,
                    name: 'Metodo de pago'
                },
                {
                    value: true,
                    name: 'Timepo de de Entrega'
                },
                {
                    value: true,
                    name: 'Ciudad / Estado / Pais'
                },
                {
                    value: true,
                    name: 'Moneda'
                },
                {
                    value: true,
                    name: 'Empleados'
                },
                {
                    value: true,
                    name: 'Clientes'
                },
                {
                    value: true,
                    name: 'Instrumentos'
                },
                {
                    value: true,
                    name: 'procedimientos'
                },
                {
                    value: true,
                    name: 'Patrones'
                },

            ],
        }
    },
    methods: {
        MostrarOcultarTodo() {
            for (var i = 0; i < this.view.length; i++) {
                this.view[i].value = false
            }
        }
    }
};
</script>
