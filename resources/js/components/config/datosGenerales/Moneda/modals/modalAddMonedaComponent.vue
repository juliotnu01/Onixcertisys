<template>
    <v-app>
        <v-dialog v-model="openDialog" width="400">
            <v-card>
                <v-card-title>Agregar Moneda</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_cep">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="2" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Clave" outlined v-model="model.clave"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Nombre de la moneda" outlined v-model="model.nombre_moneda"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Tipo de cambio" outlined v-model="model.tipo_de_cambio"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addCiudadEstadoPais" >
                            Agregar 
                        </v-btn>
                        <v-btn text color="red" @click.prevent="openDialog = false"  >
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
            model: {
            	clave: '',
            	nombre_moneda: '',
            	tipo_de_cambio: ''
            }
        }
    },
    computed: {
        ...mapGetters([
        	'services',
            'dialog_add_moneda'
        ]),
        openDialog:{
        	get(){
        		return this.dialog_add_moneda
        	},
        	set(val){
        		this.$store.commit('setDialogAddMoneda', val)
        	}
        }
        
    },
    mounted() {
    },
    methods: {
        async addCiudadEstadoPais(){
        	if (this.$refs.f_cep.validate()) {
        		await this.services.monedaServices.agregarMoneda(this.model)
                await this.services.monedaServices.getlistMonedas()
        		this.model =  {
            	clave: '',
            	nombre_moneda: '',
            	tipo_de_cambio: ''
            }
        	}
        }
    }
};

</script>
