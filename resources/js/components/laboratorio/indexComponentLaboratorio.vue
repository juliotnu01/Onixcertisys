<template>
<v-app>
    <v-card>
        <v-text-field label="Buscar Instrumento" v-model="search" outlined />
        <v-data-table :headers="headers" :items="partidas_para_calibrar" :items-per-page="5" class="elevation-1" :search="search">
            <template v-slot:item.ruta_pdf_calibracion="{item}">
                <td class="text-center">
                    <v-btn color="primary" target="_blank" :href="item.ruta_pdf_calibracion" block>
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                </td>
            </template>
            <template v-slot:item.accion="{item}">
                <td class="text-rigth">
                    <v-btn icon color="primary" @click="Calibrar(item)">
                        <v-icon>mdi-crosshairs-gps</v-icon>
                    </v-btn>
                </td>
            </template>
            <template v-slot:item.has_calibracion="{item}">
                <td class="text-rigth">
                    <v-alert dense outlined type="error" v-if="!item.has_calibracion">
                        por iniciar
                    </v-alert>
                    <v-alert dense outlined type="warning" v-else-if="item.has_calibracion.estado === 'en proceso'">
                        {{item.has_calibracion.estado }}
                    </v-alert>
                    <v-alert dense outlined type="success" v-else>
                        {{item.has_calibracion.estado }}
                    </v-alert>
                </td>
            </template>
        </v-data-table>
    </v-card>
    <modal-calibracion />
    <notificacion/>
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import modalCalibracion from './modals/modalCalibracionComponent.vue'
import notificacionComponent from '../notificacion/indexComponentNotificacion'
export default {
    components: {
        'modal-calibracion': modalCalibracion,
        'notificacion': notificacionComponent
    },
    data() {
        return {
            search: '',
            headers: [{
                    text: "Recibo",
                    align: "center",
                    sortable: true,
                    value: "has_recibo.id",
                },
                {
                    text: "Informe",
                    align: "center",
                    sortable: true,
                    value: "informe_id",
                },
                {
                    text: "Instrumento",
                    align: "center",
                    sortable: true,
                    value: "has_intrumento.nombre",
                },
                {
                    text: "Cliente",
                    align: "center",
                    sortable: true,
                    value: "has_recibo.has_cotizaicon.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social",
                },
                {
                    text: "Magnitud",
                    align: "center",
                    sortable: true,
                    value: "has_intrumento.has_magnitud.nombre",
                },
                {
                    text: "Tenico",
                    align: "center",
                    sortable: true,
                    value: "has_tecnico.nombre_completo",
                },
                {
                    text: "Estado de la calibracion",
                    align: "center",
                    sortable: true,
                    value: "has_calibracion",
                },
                {
                    text: "Certificado de la calibracion",
                    align: "center",
                    sortable: true,
                    value: "ruta_pdf_calibracion",
                },
                {
                    text: "Accion",
                    align: "center",
                    sortable: false,
                    value: "accion",
                }
            ],
        };
    },
    computed: {
        ...mapGetters(['services', 'partidas', 'partidas_para_calibrar']),

    },
    async mounted() {
        await this.services.partidaServices.getlistpartidasParaCalibrar()
    },
    methods: {
        Calibrar(item) {
            console.log({item})
            this.$store.commit('setPartida', item)
            this.$store.commit('setDialogCalibracion', true)
        }
    }
};
</script>
