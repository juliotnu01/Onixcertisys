<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="6">
                        <v-card class="elevation-12" >
                            <v-img src="img/login-logo.png" height="194"></v-img>
                            <v-card-text>
                                <v-form ref="f_register">
                                    <v-text-field :rules="[rules.required]"  v-model="var_name" outlined label="Nombre" name="login" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                                    <v-text-field :rules="[rules.required, rules.email, rules.exitsEmail]" v-model="var_email" outlined label="Correo electronico" name="login" prepend-inner-icon="mdi-email" type="text"></v-text-field>
                                    <v-text-field :rules="[rules.required, rules.counter]" outlined  v-model="var_ps"  id="password" label="Password" name="password" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                                    <v-text-field :rules="[rules.required, rules.confirm_pass]"  outlined  v-model="var_ps_confirm" id="password_confirm" label="Confirmar Password" name="password_confirm" prepend-inner-icon="mdi-lock-question" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary"  @click="addUser">Registrar</v-btn>
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
   data () {
      return {
        var_name:'',
        var_email: '',         
        var_ps: '',
        var_ps_confirm: '',
        email: '',
        rules: {
          required: value => !!value || 'Este campo es requerido.',
          counter: value => value.length >= 8 || 'la contraseña debe ser de 8 caracteres minimo',
          exitsEmail: value => {
              var valid = this.listUser.some(item => item.email === value)
              if(valid){
                  return 'Este correo ya se encuentra registrado'
              }
          },
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo Electronico Invalido'
          },
          confirm_pass: value => {
              if(this.var_ps != value){
                  return 'La contraseña no coinciden'
              }
          }
        },
      }
    },
    mounted(){
        this.getlistUser
    },
    computed: {
        ...mapGetters(['services', 'listUser']),
        getlistUser:{
            get(){
                return this.services.userServices.getListUser()
            },
            set(newVal){
                this.$store.commit('setListUser', newVal)
            }
        },
    },
    methods:{
        async addUser(){
            try {
                var model = {
                    name: this.var_name,
                    email: this.var_email,
                    password: this.var_ps,
                    password_confirmation: this.var_ps_confirm
                }
                if(this.$refs.f_register.validate()){
                   this.services.userServices.addUser(model)
                }
            } catch (error) {
             console.log(error)   
            }
        }
    }
}

</script>
