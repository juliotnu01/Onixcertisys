<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Condiciones de Pago</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Acreditacion" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddCondicionDePago', true)">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_rol" :items="listCondicionDePago" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminarcondicionDePago(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="editarcondicionDePago(item)">
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
import modalAddCondicionDePago from './modals/modalAddCondicionDePagoComponent.vue'
import modalEditCondicionDePago from './modals/modalEditCondicionDePagoComponent.vue'
export default {
    components: {
    	'modal-add': modalAddCondicionDePago,
    	'modal-edit': modalEditCondicionDePago
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
        ...mapGetters(['services', 'listCondicionDePago', ]),
    },
    mounted() {
         this.services.condicionDePagoServices.getlistCondicionDePago()
    },
    methods: {
        async editarcondicionDePago(cdp) {
            this.$store.commit('setEditCondicionDePago', cdp)
            this.$store.commit('setDialogEditCondicionDePago', true)
        },
        async eliminarcondicionDePago(cdp) {
            this.services.condicionDePagoServices.EliminarCondicionDepago(cdp)
            this.services.condicionDePagoServices.getlistCondicionDePago()
        }
    }
}

</script>
	