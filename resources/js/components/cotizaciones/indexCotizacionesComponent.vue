<template>
<v-app class="fill-heigth">
    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-text-field label="Buscar Cotizacion" outlined v-model="search_cot"></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
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
                <v-alert class="mt-5" color="purple" icon="mdi-receipt" dense v-if="item.estado_de_la_cotizacion == 'En recibo'" dark> {{item.estado_de_la_cotizacion}} </v-alert>
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
                <v-btn icon small color="primary" @click="ViewCotizacion(item)">
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon small color="error" @click="eliminarCotizacion(item)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn icon small color="warning" @click="EditarCotizacion(item)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon small color="info" @click="printCotizacion(item)">
                    <v-icon>mdi-printer</v-icon>
                </v-btn>
            </td>
        </template>
        <template v-slot:item.contacto="{ item }">
            <td class="text-left">
                <small class="text-left">
                    Nombre:{{ item.contacto }} <br />
                    Teléfono:{{ item.contacto_telefono }} <br />
                    Correo:{{ item.contacto_correo }} <br />
                </small>
            </td>
        </template>
        <template v-slot:item.has_cliente="{ item }">
            <td>{{ item.has_cliente.razon_social }}</td>
        </template>
        <template v-slot:item.has_empleado="{ item }">
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
            headers_cotizacion: [{
                    text: "Folio",
                    value: "id",
                    align: 'center',
                },
                {
                    text: "Fecha",
                    value: "created_at",
                    align: 'center',
                },
                {
                    text: "Cliente",
                    value: "has_cliente",
                    align: 'center',
                },
                {
                    text: "Contacto",
                    value: "contacto",
                    align: 'center',
                },
                {
                    text: "Vendedor",
                    value: "has_empleado",
                    align: 'center',
                },
                {
                    text: "Estado",
                    value: "estado_de_la_cotizacion",
                    align: 'center',
                },
                {
                    text: "Tipo de Servicio",
                    value: "tipo_de_servicio",
                    align: 'center',
                },
                {
                    text: "Moneda",
                    value: "has_moneda",
                    align: 'center',
                },
                {
                    text: "Sub Total",
                    value: "sub_total",
                    align: 'center',
                },
                {
                    text: "IVA",
                    value: "iva",
                    align: 'center',
                },
                {
                    text: "Total",
                    value: "total",
                    align: 'center',
                },
                {
                    text: "Accion",
                    value: "accion",
                    align: 'center',
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
            await his.services.cotizacionServices.printCotizacion(item);
            await this.$store.commit('setDialogViewPdfCotizacion', true)
        },
    },
};
</script>

<style lang="scss" scoped>
$data-table-regular-row-height: 100px !default;
$data-table-scroll-bar-width: 50px !default;
</style>
