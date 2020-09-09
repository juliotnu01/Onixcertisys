<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Monedas</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Moneda" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddMoneda', true)" >
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_tde" :items="monedas" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminarMoneda(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="EditMoneda(item)" >
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
import modalAddMoneda from './modals/modalAddMonedaComponent.vue'
import modalEditMoneda from './modals/modalEditMonedaComponent.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
    	'modal-add': modalAddMoneda,
    	'modal-edit': modalEditMoneda,
    },
    data() {
        return {
            headers_tde: [
                { text: 'ID', align: 'end', sortable: false, sortable: true, value: 'id' },
                { text: 'Clave', align: 'center', sortable: false, value: 'clave' },
                { text: 'Nombre de Moneda', align: 'center', sortable: false, value: 'nombre_moneda' },
                { text: 'Tipo de cambio', align: 'center', sortable: false, value: 'tipo_de_cambio' },
                { text: 'Agregado', align: 'center', sortable: false, value: 'created_at' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' }
            ],
            listRoles: [],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'monedas']),
    },
    mounted() {
    	 this.services.monedaServices.getlistMonedas()
    },
    methods: {
        async EditMoneda(mna) {
        	this.$store.commit('setMoneda', mna)
        	this.$store.commit('setDialogEditMoneda', true)
        },
        async eliminarMoneda(mna) {
        	this.services.monedaServices.EliminarAcreditaciones(mna)
        	this.services.monedaServices.getlistMonedas()
        }
    }
}

</script>
	