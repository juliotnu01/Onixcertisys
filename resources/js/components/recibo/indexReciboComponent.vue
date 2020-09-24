<template>
<v-app class="fill-heigth">
    <v-row>
        <v-col cols="12" xs="!2" sm="12" md="12" lg="12">
            <v-container fluid>
                <v-data-iterator :items="recibos" :items-per-page.sync="itemsPerPage" :page="page" :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer>
                    <template v-slot:header>
                        <v-toolbar dark color="blue darken-3" class="mb-1">
                            <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-search" label="Search"></v-text-field>
                        </v-toolbar>
                    </template>

                    <template v-slot:default="props">
                        <v-row>
                            <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="3" lg="3">
                                <v-card>
                                    <v-card-title>
                                        <v-row>
                                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                                <div class="text-right text-caption">
                                                    Fecha creación:
                                                    {{ item.created_at.substr(0, 10) }}
                                                </div>
                                                <div>Recibo id:
                                                    {{ item.id }}
                                                </div>
                                                <div>
                                                    Cotización id:
                                                    {{ item.cotizacion_id }}
                                                </div>
                                                <div>Estado: {{ item.estado }}</div>
                                            </v-col>
                                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                                <small>
                                                    <strong>Cliente: </strong>
                                                    {{item.has_cotizaicon.has_cliente.razon_social}}
                                                    <v-btn icon @click="show = !show">
                                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                                    </v-btn>
                                                </small>
                                                <v-expand-transition>
                                                    <div v-show="show">
                                                        <v-card-text>
                                                            <small>
                                                                <strong>Dirección Fiscal: </strong>
                                                                {{item.has_cotizaicon.has_cliente.direccion_fiscal}} </small><br />
                                                            <small>
                                                                <strong>Teléfono: </strong>
                                                                {{item.has_cotizaicon.has_cliente.telefono}} </small><br />
                                                            <small>
                                                                <strong>Correo electronico para la factura:
                                                                </strong>
                                                                {{item.has_cotizaicon.has_cliente.correo_electronico_factura}} </small><br />
                                                            <small>
                                                                <strong>Nombre encargado: </strong>
                                                                {{item.has_cotizaicon.has_cliente.nombre_completo}} </small><br />
                                                            <small>
                                                                <strong>Celular encargado: </strong>
                                                                {{item.has_cotizaicon.has_cliente.celular_contacto}} </small><br />
                                                            <small>
                                                                <strong>Correo encargado: </strong>
                                                                {{item.has_cotizaicon.has_cliente.correo_contacto}}
                                                            </small><br />
                                                        </v-card-text>
                                                    </div>
                                                </v-expand-transition>
                                            </v-col>
                                        </v-row>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-simple-table dense>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center">Partida</th>
                                                    <th class="text-center">Identificación</th>
                                                    <th class="text-center">Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in item.has_partidas" :key="item.name">
                                                    <td class="text-center">{{ item.id }}</td>
                                                    <td class="text-center">{{ item.identificacion }}</td>
                                                    <td class="text-center">
                                                        <v-btn color="success" icon dense small @click="AsignarTecnico(item)">
                                                            <v-icon>mdi-eye</v-icon>
                                                        </v-btn>
                                                        <v-btn color="info" icon dense small>
                                                            <v-icon>mdi-printer</v-icon>
                                                        </v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card>
                            </v-col>
                        </v-row>
                    </template>
                    <template v-slot:footer>
                        <v-row class="mt-2" align="center" justify="center">
                            <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-row>
                    </template>
                </v-data-iterator>
            </v-container>
        </v-col>
    </v-row>
    <modal-asignar-tecnico />
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import modalAsignarTecnico from './modals/modalAsignarTecnicoComponent'
export default {
    components: {
        'modal-asignar-tecnico': modalAsignarTecnico
    },
    data() {
        return {
            itemsPerPageArray: [4, 8, 12],
            search: "",
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 4,
            sortBy: "name",
            show: false,
        };
    },
    computed: {
        ...mapGetters(["services", "recibos"]),
        numberOfPages() {
            return Math.ceil(this.recibos.length / this.itemsPerPage);
        },
    },
    async mounted() {
        await this.services.reciboServices.getlistRecibos();
    },
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number;
        },
        AsignarTecnico(item) {
            console.log({
                item
            })
            this.$store.commit('setPartidaTecnico', item)
            this.$store.commit('setDialogAsignarTecnico', true)
        }
    },
};
</script>
