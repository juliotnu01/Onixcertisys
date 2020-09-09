<template>
    <v-app>
        <v-card class="p-2">
            <v-card-title>Ciudades / Estados / Paises</v-card-title>
            <v-container>
                <v-toolbar flat color="white">
                    <v-text-field label="Buscar Acreditacion" placeholder="" v-model="search_mag" outlined small></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddCiudadEstadoPais', true)">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table :headers="headers_tde" :items="ciudades_estados_paises" :search="search_mag" class="elevation-3">
                    <template v-slot:item.accion="{ item }">
                        <td class="text-center">
                            <v-btn icon color="red" small @click="eliminaTiempoDeEntrega(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn icon color="warning" small  @click="EditTiempoDeEntrega(item)">
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
import modalCiudadEstadoPaisComponent from './modals/modalAddCiudadEstadoPaisComponent.vue'
import modalEditCiudadEstadoPaisComponent from './modals/modalEditCiudadEstadoPaisComponent.vue'
export default {
    components: {
        'modal-add': modalCiudadEstadoPaisComponent,
        'modal-edit': modalEditCiudadEstadoPaisComponent,
    },
    data() {
        return {
            headers_tde: [
                { text: 'ID', align: 'end', sortable: false, sortable: true, value: 'id' },
                { text: 'Ciudad', align: 'center', sortable: false, value: 'nombre_ciudad' },
                { text: 'Estado', align: 'center', sortable: false, value: 'nombre_estado' },
                { text: 'Pais', align: 'center', sortable: false, value: 'nombre_pais' },
                { text: 'Agregado', align: 'center', sortable: false, value: 'created_at' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' }
            ],
            listRoles: [],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'ciudades_estados_paises']),
    },
    mounted() {
         this.services.ciudadEstadoPaisServices.getlistCiudadEstadoPais()
    },
    methods: {
        async EditTiempoDeEntrega(tde) {
            this.$store.commit('setCiudadEstadoPais', tde)
            this.$store.commit('setDialogEditCiudadEstadoPais', true)
        },
        async eliminaTiempoDeEntrega(tde) {
            this.services.ciudadEstadoPaisServices.EliminarAcreditaciones(tde)
            this.services.ciudadEstadoPaisServices.getlistCiudadEstadoPais()
        }
    }
}

</script>
	