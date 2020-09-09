<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>tiempo de Entrega</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Acreditacion" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogTiempoDeEntrega', true)">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_tde" :items="tiempos_de_entrega" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminaTiempoDeEntrega(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="EditTiempoDeEntrega(item)" >
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
import modalAddTiempoDeEntregaComponent from './modals/modelAddTiempoDeEntrega.vue'
import modalEditTiempoDeEntregaComponent from './modals/modalEditTiempoDeEntregaComponent.vue'
export default {
    components: {
    	'modal-add': modalAddTiempoDeEntregaComponent,
    	'modal-edit': modalEditTiempoDeEntregaComponent,
    },
    data() {
        return {
            headers_tde: [
                { text: 'ID', align: 'end', sortable: false, sortable: true, value: 'id' },
                { text: 'Nombre', align: 'center', sortable: false, value: 'nombre' },
                { text: 'Agregado', align: 'center', sortable: false, value: 'created_at' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' }
            ],
            listRoles: [],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'tiempos_de_entrega']),
    },
    mounted() {
         this.services.tiempoDeEntregaServices.getlistTiempoDeEntrega()
    },
    methods: {
        async EditTiempoDeEntrega(tde) {
            this.$store.commit('setTiempoDeEntrega', tde)
            this.$store.commit('setDialogEditTiempoDeEntrega', true)
        },
        async eliminaTiempoDeEntrega(tde) {
        	this.services.tiempoDeEntregaServices.EliminarTiempoDeEntrega(tde)
        	this.services.tiempoDeEntregaServices.getlistTiempoDeEntrega()
        }
    }
}

</script>
	