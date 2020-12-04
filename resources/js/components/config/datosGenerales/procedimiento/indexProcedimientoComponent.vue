<template>
<v-app>
    <v-card class="p-2">
        <v-card-title>Procedimiento</v-card-title>
        <v-toolbar flat color="white">
            <v-text-field label="Buscar Procedimiento" placeholder="" v-model="search_mag" outlined small></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddProcedimiento', true)">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>
        <v-data-table :headers="headers_tde" :items="procedimientos" :search="search_mag" class="elevation-3">
            <template v-slot:item.accion="{ item }">
                <td class="text-center">
                    <v-btn icon color="red" small @click="EliminarProcedimiento(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon color="warning" small @click="EditProcedimiento(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </td>
            </template>
            <template v-slot:item.created_at="{ item }">
                <td class="text-center">
                    {{item.created_at.substr(0, 10)}}
                </td>
            </template>
        </v-data-table>
    </v-card>
    <modal-add />
    <modal-edit />
</v-app>
</template>

<script>
import modalAddProcedimiento from './modals/modalAddProcedimientoComponent.vue'
import modalEditProcedimiento from './modals/modalEditProcedimientoComponent.vue'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        'modal-add': modalAddProcedimiento,
        'modal-edit': modalEditProcedimiento,
    },
    data() {
        return {
            headers_tde: [{
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    sortable: true,
                    value: 'id'
                },
                {
                    text: 'Nombre de Moneda',
                    align: 'start',
                    sortable: false,
                    value: 'nombre'
                },
                {
                    text: 'Agregado',
                    align: 'end',
                    sortable: false,
                    value: 'created_at'
                },
                {
                    text: 'Acción',
                    align: 'center',
                    sortable: false,
                    value: 'accion'
                }
            ],
            listRoles: [],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'procedimientos']),
    },
    mounted() {
        this.services.procedimientoServices.getlistProcedimientos()
    },
    methods: {
        async EditProcedimiento(proce) {
            this.$store.commit('setProcedimiento', proce)
            this.$store.commit('setDialogEditProcedimiento', true)
        },
        async EliminarProcedimiento(proce) {
            this.services.procedimientoServices.EliminarProcedimiento(proce)
            this.services.procedimientoServices.getlistProcedimientos()
        }
    }
}
</script>
