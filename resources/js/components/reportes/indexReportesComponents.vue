<template>
<v-app>
    <v-row>
        <v-col cols="6">
            <v-card>
                <v-card-title primary-title>
                    Reporte de ventas por magnitud
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-autocomplete v-model="magnitud_selected" :items="magnitudes_para_reporte" item-text="nombre" return-object outlined label="Seleccionar Magnitud"></v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                            <v-autocomplete v-model="instrumento_selected" :items="magnitud_selected.has_instrumento" item-text="nombre" return-object outlined label="Seleccionar Instrumento">
                                <template v-slot:selection="data">
                                    <strong> Instrumento: </strong> {{data.item.nombre}} &nbsp;&nbsp; <strong>Alcance:</strong>{{data.item.alcance}}

                                </template>
                                <template v-slot:item="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <strong> Instrumento: </strong> {{data.item.nombre}} &nbsp;&nbsp;<strong>Alcance:</strong>{{data.item.alcance}}
                                    </template>
                                    <template v-else>
                                        <strong> Instrumento: </strong> {{data.item.nombre}} &nbsp;&nbsp;<strong>Alcance:</strong>{{data.item.alcance}}
                                    </template>
                                </template>
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center">
                                                Partida
                                            </th>
                                            <th class="text-center">
                                                Partida ID
                                            </th>
                                            <th class="text-center">
                                                Cotizacion
                                            </th>
                                            <th class="text-center">
                                                Cliente
                                            </th>
                                            <th class="text-center">
                                                Recibo
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in instrumento_selected.belongs_partida" :key="i">
                                            <td class="text-center">{{ item.id }}</td>
                                            <td class="text-center">{{ item.identificacion }}</td>
                                            <td class="text-center">{{ item.belongs_cotizacion.id }}</td>
                                            <td class="text-center">{{ item.belongs_cotizacion.has_cliente.razon_social }}</td>
                                            <td class="text-center">{{ item.belongs_cotizacion.belongs_recibo[0].id }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-app>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            // data para reporte de ventas por magnitud
            magnitud_selected: {},
            instrumento_selected: {}
        }
    },
    mounted() {
        this.services.magnitudesServices.getListMagnitudesParaReporte();
    },
    computed: {
        ...mapGetters(['services', 'magnitudes_para_reporte']),
    }
}
</script>
