<template>
    <v-app>
        <v-dialog v-model="openEditarDialog" width="500">
            <v-card>
                <v-card-title>Editar Usuario</v-card-title>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-text-field label="Nombre de Usuario" outlined v-model="userEdit.name" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-text-field label="Correo de Usuario" outlined v-model="userEdit.email" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-text-field label="Rol de Usuario" outlined v-model="userEdit.user_has_rol.name_rol" disabled/>
                        </v-col>
                        <h3>Premisos globales</h3>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-switch label="crear" v-model="userEdit.user_has_rol.associated_rol_premission.crear" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-switch label="leer" v-model="userEdit.user_has_rol.associated_rol_premission.leer" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-switch label="editar" v-model="userEdit.user_has_rol.associated_rol_premission.actualizar" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-switch label="eliminar" v-model="userEdit.user_has_rol.associated_rol_premission.eliminar" />
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn text color="primary" @click="actualizarDatos" > Actualizar Datos </v-btn>
                    <v-btn text color="error" @click="$store.commit('setDialogEditarUsuario', false)" > Cerrar </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            rules: {
                required: value => !!value || 'Este campo es requerido.',
            },
            var_name_rol: '',
            var_user_selected: {},
        }
    },
    computed: {
        ...mapGetters(['services','dialog_editar_usuario', 'user']),
        openEditarDialog: {
            get() {
                return this.dialog_editar_usuario
            },
            set(val) {
                this.$store.commit('setDialogEditarUsuario', val)
            }
        },
        userEdit: {
            get() {
                return this.user
            },
            set(val) {
                this.$store.commit('setUser', val)
            }
        },
        
    },
    methods: {
        async actualizarDatos() {
            try {
               this.services.userServices.editUser(this.userEdit)
            } catch (e) {
                console.log(e)
            }
        }
    }
};

</script>
