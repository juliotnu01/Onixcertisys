<template>
<v-row>
    <v-col cols="6">
        <v-autocomplete v-model="cliente_selected" :items="clientes" outlined label="Seleccionar cliente" item-text="razon_social" return-object />
    </v-col>
    <v-col cols="6">
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-data-table :headers="headers_cotizacion" :items="cliente_selected.has_cotizaciones" :items-per-page="5" class="elevation-1">
                            <template v-slot:item.accion="{item}">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon fab @click="EnlazarCotizacion(item)">
                                            <v-icon dark v-bind="attrs" v-on="on">mdi-content-duplicate </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Enlazar cotizacion</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:item.created_at="{item}">
                                <td> {{item.created_at.substr(0, 10)}}</td>
                            </template>
                        </v-data-table>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                        <!--<cliente />-->
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
    <modal-para-duplicar />
    <notificacion/>
</v-row>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import modalParaDuplicar from './modals/modalDuplicateCotizacionComponent.vue'
// import clienteComponent from './cliente/indexClientecomponent.vue'
import notificacionComponent from '../notificacion/indexComponentNotificacion.vue'
export default {
    components: {
        'modal-para-duplicar': modalParaDuplicar,
        'notificacion': notificacionComponent,
        // 'cliente': clienteComponent,
    },
    data() {
        return {
            cliente_selected: {},
            headers_cotizacion: [{
                    text: 'Cotizacion',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    text: 'Fecha de creacion',
                    align: 'start',
                    sortable: false,
                    value: 'created_at',
                },
                {
                    text: 'Accion',
                    align: 'center',
                    sortable: false,
                    value: 'accion',
                },
            ],

        }
    },
    computed: {
        ...mapGetters(['services', 'clientes']),
    },
    mounted() {
        this.services.clienteServices.getlistclientes()
    },
    methods: {
        EnlazarCotizacion(item) {
            this.$store.commit('setCotizacionParaDuplicar', item)
            this.$store.commit('setDialogDuplicateCotizacion', true)
            console.log({
                item
            })
        }
    }
}
</script>
