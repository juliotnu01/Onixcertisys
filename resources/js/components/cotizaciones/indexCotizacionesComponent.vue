<template>
<v-app class="fill-heigth">
    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-text-field label="Buscar Cotizacion" outlined v-model="search_cot"></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-btn fab color="primary" class="float-right ml-5" @click="services.cotizacionServices.getlistCotizaciones()">
                <v-icon>mdi-reload</v-icon>
            </v-btn>
            <v-btn fab color="primary" class="float-right" @click="$store.commit('setDialogAddCotizacion', true)">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-data-table dense :headers="headers_cotizacion" :items="cotizaciones" item-key="name" class="elevation-1" :search="search_cot">
        <template v-slot:item.created_at="{ item }">
            <td>
                {{ item.created_at.substr(0, 10) }}
            </td>
        </template>
        <template v-slot:item.estado_de_la_cotizacion="{ item }">
            <td>
                <v-alert class="mt-5" type="info" icon="mdi-clock" dense v-if="item.estado_de_la_cotizacion == 'pendiente'"> {{item.estado_de_la_cotizacion}} </v-alert>
                <v-alert class="mt-5" color="purple" icon="mdi-receipt" dense v-if="item.estado_de_la_cotizacion == 'Orden de servicio'" dark> {{item.estado_de_la_cotizacion}} </v-alert>
                <v-alert class="mt-5" type="error" icon="mdi-close-octagon" dense v-if="item.estado_de_la_cotizacion == 'Rechazada'"> {{item.estado_de_la_cotizacion}} </v-alert>
            </td>
        </template>
        <template v-slot:item.tipo_de_servicio="{ item }">
            <td>
                <v-alert class="mt-5" type="success" icon="mdi-flag" dense outlined v-if="item.tipo_de_servicio == 'normal'"> {{item.tipo_de_servicio}} </v-alert>
                <v-alert class="mt-5" type="error" icon="mdi-flag" dense outlined v-if="item.tipo_de_servicio == 'urgente'"> {{item.tipo_de_servicio}} </v-alert>
                <v-alert class="mt-5" type="warning" icon="mdi-flag" dense outlined v-if="item.tipo_de_servicio == 'programado'"> {{item.tipo_de_servicio}} </v-alert>
            </td>
        </template>
        <template v-slot:item.accion="{ item }">
            <td>
                <v-menu bottom left class="text-center">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon small color="primary" @click="ViewCotizacion(item)">
                                        <v-icon color="primary" dark v-bind="attrs" v-on="on">
                                            mdi-eye
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Orden de servicio</span>
                            </v-tooltip>
                        </v-list-item>
                        <v-list-item>
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon small color="error" @click="eliminarCotizacion(item)">
                                        <v-icon color="error" dark v-bind="attrs" v-on="on">
                                            mdi-delete
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Eliminar cotizacion</span>
                            </v-tooltip>
                        </v-list-item>
                        <v-list-item>
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon small color="warning" @click="EditarCotizacion(item)">
                                        <v-icon color="warning" dark v-bind="attrs" v-on="on">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Editar cotizacion</span>
                            </v-tooltip>
                        </v-list-item>
                        <v-list-item>
                            <v-tooltip left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon small color="info" @click="printCotizacion(item)">
                                        <v-icon color="info" dark v-bind="attrs" v-on="on">
                                            mdi-printer
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Imprimir cotizacion</span>
                            </v-tooltip>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </td>
        </template>
        <template v-slot:item.contacto="{ item }">
            <td class="text-left">
                Nombre:{{ item.contacto }} <br />
                Teléfono:{{ item.contacto_telefono }} <br />
                Correo:{{ item.contacto_correo }} <br />
            </td>
        </template>
        <template v-slot:item.has_cliente.razon_social="{ item }">
            <td>
                {{ item.has_cliente.razon_social }}<br />
                {{ item.has_cliente.has_sucursal.length > 0 ? `Sucursal: ${item.has_cliente.has_sucursal[0].nombre_sucursal}` : '' }}
            </td>
        </template>
        <template v-slot:item.has_empleado.nombre_completo="{ item }">
            <td>{{ item.has_empleado.nombre_completo }}</td>
        </template>
        <template v-slot:item.has_moneda="{ item }">
            <td>{{ item.has_moneda.clave }}</td>
        </template>
        <template v-slot:item.sub_total="{ item }">
            <td>{{ item.sub_total | numberFormat(item.has_moneda.clave) }}</td>
        </template>
        <template v-slot:item.iva="{ item }">
            <td>{{ item.iva  | numberFormat(item.has_moneda.clave) }}</td>
        </template>
        <template v-slot:item.total="{ item }">
            <td>{{ item.total | numberFormat(item.has_moneda.clave)  }}</td>
        </template>
    </v-data-table>
    <modal-add />
    <modal-edit />
    <modal-view />
    <modal-pdf />
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import modaladdCotizacion from "./modals/modalAddCotizacionComponent.vue";
import modaleditCotizacion from "./modals/modalEditCotizacionComponent";
import modalViewCotizacion from "./modals/modalViewCotizacionComponent";
import modalViewPdfCotizaicon from './modals/modalViewPdfComponent'
export default {
    components: {
        "modal-add": modaladdCotizacion,
        "modal-edit": modaleditCotizacion,
        "modal-view": modalViewCotizacion,
        "modal-pdf": modalViewPdfCotizaicon,
    },
    data() {
        return {
            menu: false,
            headers_cotizacion: [{
                    text: "Folio",
                    value: "id",
                    align: 'start',
                },
                {
                    text: "Fecha",
                    value: "created_at",
                    align: 'start',
                },
                {
                    text: "Cliente",
                    value: "has_cliente.razon_social",
                    align: 'start',
                },
                {
                    text: "Contacto",
                    value: "contacto",
                    align: 'start',
                },
                {
                    text: "Vendedor",
                    value: "has_empleado.nombre_completo",
                    align: 'start',
                },
                {
                    text: "Estado",
                    value: "estado_de_la_cotizacion",
                    align: 'start',
                },
                {
                    text: "Tipo de Servicio",
                    value: "tipo_de_servicio",
                    align: 'start',
                },
                {
                    text: "Moneda",
                    value: "has_moneda",
                    align: 'start',
                },
                {
                    text: "Sub Total",
                    value: "sub_total",
                    align: 'start',
                },
                {
                    text: "IVA",
                    value: "iva",
                    align: 'start',
                },
                {
                    text: "Total",
                    value: "total",
                    align: 'start',
                },
                {
                    text: "Accion",
                    value: "accion",
                    align: 'start',
                },
            ],
            search_cot: "",
        };
    },
    computed: {
        ...mapGetters(["services", "cotizaciones"]),
    },
    mounted() {
        this.services.cotizacionServices.getlistCotizaciones();
    },
    methods: {
        async EditarCotizacion(cot) {
            this.$store.commit("setDialogEditCotizacion", true);
            this.$store.commit("setCotizacion", cot);
        },
        eliminarCotizacion(item) {
            this.services.cotizacionServices.EliminarCotizacion(item);
            this.services.cotizacionServices.getlistCotizaciones();
        },
        ViewCotizacion(item) {
            this.$store.commit("setDialogViewCotizacion", true);
            this.$store.commit("setCotizacionView", item);
        },
        async printCotizacion(item) {
            await this.services.cotizacionServices.printCotizacion(item);
        },
    },
};
</script>

<style lang="scss" scoped>
$data-table-regular-row-height: 100px !default;
$data-table-scroll-bar-width: 50px !default;
</style>
