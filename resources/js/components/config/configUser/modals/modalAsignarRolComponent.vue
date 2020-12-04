<template>
<v-app>
    <v-dialog v-model="openAsignarRolDialog" width="500">
        <v-card>
            <v-card-title>Asignar Rol</v-card-title>
            <v-container>
                <v-card-text>
                    <h3> Rol: {{rol_selected.name_rol}}</h3>
                </v-card-text>
                <v-card-text>
                    <v-form ref="f_register_rol">
                        <v-select :items="listUser" label="Seleccionar un usuario" outlined :rules="[rules.required]" item-text="name" return-object v-model="var_user_selected"></v-select>
                        </v-col>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="blue" @click="AsignarRol">
                        Asignar Rol
                    </v-btn>
                    <v-btn text color="red" @click="openAsignarRolDialog = false">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-dialog>
</v-app>
</template>

<script>
import {
    mapGetters
} from 'vuex'
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
        ...mapGetters(['services', 'listUser', 'dialog_asignar_rol', 'rol_selected']),
        openAsignarRolDialog: {
            get() {
                return this.dialog_asignar_rol
            },
            set(val) {
                this.$store.commit('setAsignarRolModal', val)
            }
        }
    },
    mounted() {
        this.services.userServices.getListUser()
    },
    methods: {
        async AsignarRol() {
            try {
                var model = {
                    rol: this.rol_selected,
                    user_id: this.var_user_selected.id
                }
                if (this.var_user_selected != {}) {
                    await this.services.rolServices.asignarRol(model)
                    this.$emit('RolAsignado', true)
                    
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
};
</script>
