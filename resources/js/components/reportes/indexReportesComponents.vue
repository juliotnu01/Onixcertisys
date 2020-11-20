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
                                                Folio
                                            </th>
                                            <th class="text-center">
                                                Cliente
                                            </th>
                                            <th class="text-center">
                                                Factura
                                            </th>
                                            <th class="text-center">
                                                Fecha
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
                                            <td class="text-center">{{ item.belongs_cotizacion.belongs_recibo[0].created_at.substr(0,10) }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                        <v-col cols="12">
                            <h1> Total Facturado: {{var_computed_total_vendido | numberFormat}}</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-btn color="success" block @click="getReporteVentasMagnitud">
                                Obtener Reporte &nbsp;<v-icon>mdi-printer</v-icon>
                            </v-btn>
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
            instrumento_selected: {},

        }
    },
    mounted() {
        this.services.magnitudesServices.getListMagnitudesParaReporte();
    },
    computed: {
        ...mapGetters(['services', 'magnitudes_para_reporte']),
        var_computed_total_vendido: {
            get() {
                var result = [],
                    data = 0;

                if (Object.entries(this.instrumento_selected).length > 0) {
                    for (var i = 0; this.instrumento_selected.belongs_partida.length > i; i++) {
                        for (var j = 0; this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo.length > j; j++) {
                            if (!result.some(item => item.id == this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo[j].id)) {
                                result.push(this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo[j])
                            }
                        }
                    }

                }
                result.forEach(item => {
                    data += item.total
                })
                return data
            },
            set(val) {
                this.instrumento_selected = val
            }
        }
    },
    methods: {
        async getReporteVentasMagnitud() {
            try {
                var model = {
                    total_vendido: this.var_computed_total_vendido,
                    instrumento_selected: this.instrumento_selected
                }
                let {
                    data
                } = await axios.post('/api/get-reporte-magnitud-ventas', model)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
