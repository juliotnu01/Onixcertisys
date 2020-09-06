<template>
    <v-app>
        <v-dialog v-model="openRolDialog" width="500">
            <v-card>
                <v-card-title>Registro Rol</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_register_rol">
                            <v-text-field :rules="[rules.required]" v-model="var_name_rol" outlined label="Nombre del rol" prepend-inner-icon="mdi-account-star" type="text"></v-text-field>
                            <v-select :items="listUser" label="Seleccionar un usuario" outlined :rules="[rules.required]" item-text="name" return-object v-model="var_user_selected"></v-select>
                            </v-col>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click="addRol">
                            Registrar
                        </v-btn>
                        <v-btn text color="red" @click="openRolDialog = false">
                            Cerrar
                        </v-btn>
                    </v-card-actions>
                </v-container>
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
        ...mapGetters(['services', 'listUser', 'dialog_rol_register']),
        openRolDialog: {
            get() {
                return this.dialog_rol_register
            },
            set(val) {
                this.$store.commit('setRolRegisterModal', val)
            }
        }
    },
    mounted() {
        return this.services.userServices.getListUser()
    },
    methods: {
        async addRol() {
            try {
            	var model = {
            		name_rol: this.var_name_rol,
            		user_id: this.var_user_selected.id
            	}
            	if (this.$refs.f_register_rol.validate() && this.var_user_selected != {}) {
	                this.services.rolServices.addRol(model)
            	}
            } catch (e) {
                console.log(e)
            }
        }
    }
};

</script>
