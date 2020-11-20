<template>
<v-app>
    <v-card class="p-2">
        <v-card-title>Patrones</v-card-title>
        <v-toolbar flat color="white">
            <v-text-field label="Buscar Patrones" placeholder="" v-model="search_mag" outlined small></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddPatron', true)">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>
        <v-data-table :headers="headers_empleado" :items="patrones" :search="search_mag" class="elevation-3">
            <template v-slot:item.accion="{ item }">
                <td class="text-center">
                    <v-btn icon color="red" small @click="eliminaPatron(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon color="warning" small @click="EditPatron(item)">
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
    </v-card>
    <modal-add />
    <modal-edit />
</v-app>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import modalAddPatron from './modals/modalAddPatronComponent.vue'
import modalEditPatron from './modals/modalEditPatronComponent.vue'
export default {
    components: {
        'modal-add': modalAddPatron,
        'modal-edit': modalEditPatron
    },
    data() {
        return {
            headers_empleado: [{
                    text: 'ID',
                    align: 'end',
                    sortable: false,
                    sortable: true,
                    value: 'id'
                },
                {
                    text: 'Clave',
                    align: 'center',
                    sortable: false,
                    value: 'clave'
                },
                {
                    text: 'Nombre',
                    align: 'center',
                    sortable: false,
                    value: 'nombre'
                },
                {
                    text: 'Alcance',
                    align: 'center',
                    sortable: false,
                    value: 'alcance'
                },
                {
                    text: 'Fecha de Calibracion',
                    align: 'center',
                    sortable: false,
                    value: 'fecha_calibracion'
                },
                {
                    text: 'Fecha de Vencimiento ',
                    align: 'center',
                    sortable: false,
                    value: 'fecha_vencimiento'
                },
                {
                    text: 'Agregado',
                    align: 'center',
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
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'patrones']),
    },
    mounted() {
        this.services.patronServices.getlistPatrones()
    },
    methods: {
        async EditPatron(ptr) {
            this.$store.commit('setPatron', ptr)
            this.$store.commit('setDialogEditPatron', true)
        },
        async eliminaPatron(ptr) {
            this.services.patronServices.EliminarPatron(ptr)
            this.services.patronServices.getlistPatrones()
        }
    }
}
</script>
