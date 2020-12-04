<template>
    <v-app>
        <v-dialog v-model="openDialog" width="500">
            <v-card>
            	<v-card-title>Registro Usuarios</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_register">
                            <v-text-field  v-model="var_name" outlined label="Nombre" name="login" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                            <v-text-field  v-model="var_email" outlined label="Correo electronico" name="login" prepend-inner-icon="mdi-email" type="text"></v-text-field>
                            <v-text-field  outlined v-model="var_ps" id="password" label="Password" name="password" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                            <v-text-field  outlined v-model="var_ps_confirm" id="password_confirm" label="Confirmar Password" name="password_confirm" prepend-inner-icon="mdi-lock-question" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click="addUser"  >
                            Registrar
                        </v-btn>
                        <v-btn text color="red" @click="openDialog = false"  >
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
    props: {
        dialog: {
            type: Boolean
        }
    },
    data() {
        return {
            var_name: '',
            var_email: '',
            var_ps: '',
            var_ps_confirm: '',
            email: '',
            
        }
    },
    mounted() {
        this.getlistUser
    },
    computed: {
        ...mapGetters(['services', 'listUser', 'dialog_user_register']),
        getlistUser: {
            get() {
                return this.services.userServices.getListUser()
            },
            set(newVal) {
                this.$store.commit('setListUser', newVal)
            }
        },
        openDialog: {
        	get(){
    			return this.dialog_user_register
        	},
        	set(val){
        		this.$store.commit('setUserRegisterModal', val)
        	}
  		}
    },
    methods: {
    	limpiar(){
    		this.var_name = ''
            this.var_email = ''
            this.var_ps = ''
            this.var_ps_confirm = ''
            this.email = ''
    	},
        async addUser() {
            try {
                var model = {
                    name: this.var_name,
                    email: this.var_email,
                    password: this.var_ps,
                    password_confirmation: this.var_ps_confirm
                }
                if (this.$refs.f_register.validate()) {
                    this.services.userServices.RegisterUser(model)
                    return this.services.userServices.getListUser()
                }
                    
            } catch (error) {
                console.log(error)
            }
        },
    }
}

</script>
