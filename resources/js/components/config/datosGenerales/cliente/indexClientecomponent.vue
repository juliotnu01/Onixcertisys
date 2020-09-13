<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Cliente</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Cliente" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('SetDialogAddCliente', true)" >
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_cli" :items="clientes" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="EliminarCliente(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="EditarCliente(item)"  >
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </td>
                    </template>
                    <template v-slot:item.created_at="{ item }">
                        <td class="text-center">
                            {{item.created_at}}
                        </td>
                    </template>
                </v-data-table>
            </v-container>
        </v-card>
        <modal-add/>
        <modal-edit/>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
import modalAddCliente from './modals/modalAddClienteComponent.vue'
import modalEditCliente from './modals/modalEditClienteComponent.vue'
export default {
    components: {
       'modal-add': modalAddCliente,
       'modal-edit': modalEditCliente
    },
    data() {
        return {
            headers_cli: [
                { text: 'ID', align: 'end', sortable: false, sortable: true, value: 'id' },
                { text: 'Nombre / Razon Social', align: 'center', sortable: false, value: 'razon_social' },
                { text: 'Direccion Fiscal', align: 'center', sortable: false, value: 'direccion_fiscal' },
                { text: 'Ciudad / Estado / Pais', align: 'center', sortable: false, value: 'ciudad_estad_pais' },
                { text: 'COdigo Postal', align: 'center', sortable: false, value: 'codigo_postal' },
                { text: 'R.F.C', align: 'center', sortable: false, value: 'rfc' },
                { text: 'Teléfono', align: 'center', sortable: false, value: 'telefono' },
                { text: 'Descuento (%)', align: 'center', sortable: false, value: 'descuento' },
                { text: 'Correo Electronico para la factura', align: 'center', sortable: false, value: 'correo_electronico_factura' },
                { text: 'Sitio Web', align: 'center', sortable: false, value: 'sitio_web' },
                { text: 'vendedor', align: 'center', sortable: false, value: 'Vendedor' },
                { text: 'Credito (%)', align: 'center', sortable: false, value: 'credito' },
                { text: 'IVA (%)', align: 'center', sortable: false, value: 'iva' },
                { text: 'Agregado', align: 'center', sortable: false, value: 'created_at' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' }
            ],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'clientes']),
    },
    mounted() {
        this.services.clienteServices.getlistclientes()
    },
    methods: {
        async EditarCliente(cli) {
            this.$store.commit('setCliente', cli)
            this.$store.commit('setDialogEditCliente', true)
        },
        async EliminarCliente(cli) {
            this.services.clienteServices.EliminarCliente(cli)
            this.services.clienteServices.getlistclientes()
        }
    }
}

</script>
	