<template>
    <v-app>
        <v-row>
            <v-col cols="12" sm="12" xs="12" md="6" lg="7">
                <v-card class="p-2">
                    <v-card-title>Usuarios</v-card-title>
                    <v-container>
                        <v-toolbar flat color="white">
                            <v-text-field label="Buscar Usuario" placeholder="Placeholder" v-model="search_user" outlined small></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setUserRegisterModal', true)">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-data-table :headers="headers_user" :items="listUser" :search="search_user" class="elevation-3">
                            <template v-slot:item.accion="{ item }">
                                <td class="text-center">
                                    <v-btn icon color="red"  small><v-icon>mdi-delete</v-icon></v-btn>
                                    <v-btn icon color="warning" small ><v-icon>mdi-pencil</v-icon></v-btn>
                                </td>
                            </template>
                             <template v-slot:item.ad_user="{ item }">
                                <td class="text-center">
                                    <v-switch label="" class="text-center m-0" small ></v-switch>
                                </td>
                            </template>
                                
                        </v-data-table>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <modal-usuario :open-dialog="var_dialog" :dialog="var_dialog"></modal-usuario>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
import modalUserComponent from '../configUser/modals/modalUserComponent.vue'
export default {
    components: {
        'modal-usuario': modalUserComponent
    },
    data() {
        return {
            var_dialog: false,
            search_user: '',
            headers_user: [
                { text: 'Nombre del usuario', align: 'end', sortable: false, sortable: true, value: 'name' },
                { text: 'Correo del usuario', align: 'start', sortable: false, value: 'email' },
                { text: 'Rol del usuario', align: 'center', sortable: false, sortable: true, value: 'rol_user' },
                { text: 'Acción', align: 'center', sortable: false, value: 'accion' },
                { text: 'Activar/Desactivar Usuario', align: 'center', sortable: false, value: 'ad_user' }
            ],
        }
    },
    async mounted() {
        await this.services.userServices.getListUser();
    },
    computed: {
        ...mapGetters(['listUser', 'services']),
    }

};

</script>
