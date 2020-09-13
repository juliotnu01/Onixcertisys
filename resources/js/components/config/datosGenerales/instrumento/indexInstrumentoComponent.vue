<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Instrumento</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Instrumento" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddInstrumento', true)">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_rol" :items="instrumentos" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminarInstrumento(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small @click="editarInstrumento(item)">
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
import modalAddIntrumento from './modals/modalAddInstrumentoComponent.vue'
import modalEditIntrumento from './modals/modalEditInstrumentocomponent.vue'
export default {
    components: {
        'modal-add': modalAddIntrumento,
        'modal-edit': modalEditIntrumento
    },
    data() {
        return {
            headers_rol: [
                { text: 'ID', align: 'end', sortable: false, sortable: true, value: 'id' },
                { text: 'Instrumento', align: 'center', sortable: false, value: 'nombre' },
                { text: 'Alcance', align: 'center', sortable: false, value: 'alcance' },
                { text: 'Acreditación', align: 'center', sortable: false, value: 'has_acreditacion.nombre' },
                { text: 'Area', align: 'center', sortable: false, value: 'has_magnitud.nombre' },
                { text: 'Precio Venta', align: 'center', sortable: false, value: 'precio_venta' },
                { text: 'Agregado', align: 'center', sortable: false, value: 'created_at' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' }
            ],
            listRoles: [],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'instrumentos']),
    },
    mounted() {
        this.services.instrumentoServices.getlistInstrumentos();
    },
    methods: {
        async editarInstrumento(inst) {
            this.$store.commit('setInstrumento', inst)
            this.$store.commit('setDialogEditInstrumento', true)
        },
        async eliminarInstrumento(inst) {
            this.services.instrumentoServices.EliminarInstrumento(inst);
            this.services.instrumentoServices.getlistInstrumentos();
        }
    }
}

</script>
	