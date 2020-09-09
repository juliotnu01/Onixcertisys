<template>
    <v-app>
        <v-dialog v-model="openDialog" width="400">
            <v-card>
                <v-card-title>Editar Condicion de Pago</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_mag">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="metodo_de_pago.nombre"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addCondicionDePago" >
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
            	nombre: ''
            }
        }
    },
    computed: {
        ...mapGetters([
        	'services',
            'dialog_edit_metodo_de_pago',
            'metodo_de_pago'
        ]),
        openDialog:{
        	get(){
        		return this.dialog_edit_metodo_de_pago
        	},
        	set(val){
        		this.$store.commit('setDialogEditMetodoDePago', val)
        	}
        }
        
    },
    methods: {
        async addCondicionDePago(){
        	if (this.$refs.f_mag.validate()) {
        		await this.services.metodoDePagoServices.actualizarMetodoDePago(this.metodo_de_pago)
                await this.services.metodoDePagoServices.getlistMetodoDePago()
        		this.model = {
        			nombre: '',
        		}
        	}
        }
    }
};

</script>
