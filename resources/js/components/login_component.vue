<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="6">
                        <v-card class="elevation-12" >
                            <v-img src="img/login-logo.png" height="194"></v-img>
                            <v-card-text>
                                <v-form ref="login_form" >
                                    <v-text-field :rules="[rules.required]" v-model="email" outlined label="Usuario" name="login" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                                    <v-text-field :rules="[rules.required]" v-model="psw" outlined label="Contraseña" name="psw" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="userLogin">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            email: '',
            psw: '',
            rules: {
                required: value => !!value || 'Este campo es requerido.'
            }
        }
    },
    computed: {
        ...mapGetters(['services']),
    },
    methods:{
        async userLogin(){
            try {
                var model = {
                    email: this.email,
                    password: this.psw
                }
                if(this.$refs.login_form.validate()){
                    this.services.userServices.loginUsr(model)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>
