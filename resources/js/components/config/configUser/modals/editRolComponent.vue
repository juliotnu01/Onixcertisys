<template>
    <v-app>
        <v-dialog v-model="openEditarRolDialog" width="500">
            <v-card>
                <v-card-title>Editar Rol</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_editar_rol">
                        	<v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            	<v-text-field outlined label="Nombre del Rol " v-model="editarRol.name_rol" />
                            </v-col>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click="AsignarRol">
                            Editar Rol
                        </v-btn>
                        <v-btn text color="red" @click="openEditarRolDialog = false">
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
        ...mapGetters(['services', 'listUser', 'dialog_editar_rol', 'edit_rol']),
        openEditarRolDialog: {
            get() {
                return this.dialog_editar_rol
            },
            set(val) {
                this.$store.commit('setDialogEditRol', val)
            }
        },
        editarRol: {
        	get(){
        		return this.edit_rol
        	},
        	set(val){
        		this.$store.commit('setEditRol', val)	
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
            	if (this.$refs.f_editar_rol.validate()) {
	                 await this.services.rolServices.asignarRol(this.editarRol)
                     await this.services.rolServices.getListRoles();
            	}
            } catch (e) {
                console.log(e)
            }
        }
    }
};

</script>
