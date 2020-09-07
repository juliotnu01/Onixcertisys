<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Metodo de Pago</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Acreditacion" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddMetodoDePago', true)">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_rol" :items="list_metodo_de_pago" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminarMetodoDePago(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="editarMetodoDePago(item)">
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
import modalAddMetodoDePago from './modals/modalAddMetodoDePagoComponent.vue'
import modalEditMetodoDePago from './modals/modalEditMetodoDePagoComponent.vue'
export default {
    components: {
        'modal-add':    modalAddMetodoDePago,
        'modal-edit':  modalEditMetodoDePago,
    },
    data() {
        return {
            headers_rol: [
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
        ...mapGetters(['services', 'list_metodo_de_pago']),
    },
    mounted() {
         this.services.metodoDePagoServices.getlistMetodoDePago()
    },
    methods: {
        async editarMetodoDePago(mdp) {
            this.$store.commit('setMetodoDePago', mdp)
            this.$store.commit('setDialogEditMetodoDePago', true)
        },
        async eliminarMetodoDePago(mdp) {
            this.services.metodoDePagoServices.EliminarMetodoDepago(mdp)
            this.services.metodoDePagoServices.getlistMetodoDePago()
        }
    }
}

</script>
	