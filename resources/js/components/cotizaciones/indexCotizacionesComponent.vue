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
        <template v-slot:item.accion="{ item }">
            <td>
                <v-btn icon small color="primary">
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon small color="error" @click="eliminarCotizacion(item)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn icon small color="warning" @click="EditarCotizacion(item)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </td>
        </template>
        <template v-slot:item.contacto="{ item }">
            <td>
                <small>
                    Nombre:{{item.contacto}} <br />
                    Teléfono:{{item.contacto_telefono}} <br />
                    Correo:{{item.contacto_correo}} <br />
                </small>
            </td>
        </template>
        <template v-slot:item.has_cliente="{ item }">
            <td>{{item.has_cliente.razon_social}}</td>
        </template>
        <template v-slot:item.has_empleado="{ item }">
            <td>{{item.has_empleado.nombre_completo}}</td>
        </template>
        <template v-slot:item.has_moneda="{ item }">
            <td>{{item.has_moneda.clave}}</td>
        </template>
    </v-data-table>
    <modal-add />
    <modal-edit />
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import modaladdCotizacion from "./modals/modalAddCotizacionComponent.vue"
import modaleditCotizacion from './modals/modalEditCotizacionComponent'
export default {
    components: {
        "modal-add": modaladdCotizacion,
        "modal-edit": modaleditCotizacion,
    },
    data() {
        return {
            headers_cotizacion: [{
                    text: "Folio",
                    value: "id",
                },
                {
                    text: "Fecha",
                    value: "created_at",
                },
                {
                    text: "Cliente",
                    value: "has_cliente",
                },
                {
                    text: "Contacto",
                    value: "contacto",
                },
                {
                    text: "Vendedor",
                    value: "has_empleado",
                },
                {
                    text: "Estado",
                    value: "estado_de_la_cotizacion",
                },
                {
                    text: "Tipo de Servicio",
                    value: "tipo_de_servicio",
                },
                {
                    text: "Moneda",
                    value: "has_moneda",
                },
                {
                    text: "Sub Total",
                    value: "sub_total",
                },
                {
                    text: "IVA",
                    value: "iva",
                },
                {
                    text: "Total",
                    value: "total",
                },
                {
                    text: "Accion",
                    value: "accion",
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
            this.$store.commit('setDialogEditCotizacion', true)
            this.$store.commit('setCotizacion', cot)
        },
        eliminarCotizacion(item) {
            this.services.cotizacionServices.EliminarCotizacion(item)
            this.services.cotizacionServices.getlistCotizaciones();
        }
    }
};
</script>
