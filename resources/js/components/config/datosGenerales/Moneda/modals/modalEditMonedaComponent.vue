<template>
    <v-app>
        <v-dialog v-model="openDialog" width="400">
            <v-card>
                <v-card-title>Editar Moneda</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_cep">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Clave" outlined v-model="moneda.clave"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Nombre de la moneda" outlined v-model="moneda.nombre_moneda"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Tipo de cambio" outlined v-model="moneda.tipo_de_cambio"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addMoneda" >
                            Editar 
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
            'dialog_edit_moneda',
            'moneda'
        ]),
        openDialog:{
        	get(){
        		return this.dialog_edit_moneda
        	},
        	set(val){
        		this.$store.commit('setDialogEditMoneda', val)
        	}
        }
        
    },
    mounted() {
    },
    methods: {
        async addMoneda(){
        	if (this.$refs.f_cep.validate()) {
        		await this.services.monedaServices.actualizarMoneda(this.moneda)
                await this.services.monedaServices.getlistMonedas()
        	}
        }
    }
};

</script>
