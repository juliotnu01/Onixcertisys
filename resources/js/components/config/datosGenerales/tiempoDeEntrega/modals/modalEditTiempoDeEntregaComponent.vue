<template>
    <v-app>
        <v-dialog v-model="openDialog" width="400">
            <v-card>
                <v-card-title>Agregar Tiempo de Entrega</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_tde">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="tiempo_de_entrega.nombre"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="editTiempoDeEntrega" >
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
            'dialog_edit_tiempo_de_entrega',
            'tiempo_de_entrega'
        ]),
        openDialog:{
        	get(){
        		return this.dialog_edit_tiempo_de_entrega
        	},
        	set(val){
        		this.$store.commit('setDialogEditTiempoDeEntrega', val)
        	}
        }
        
    },
    mounted() {
    },
    methods: {
        async editTiempoDeEntrega(){
        	if (this.$refs.f_tde.validate()) {
                await this.services.tiempoDeEntregaServices.actualizarTiempoDeEntrega(this.tiempo_de_entrega)
                await this.services.tiempoDeEntregaServices.getlistTiempoDeEntrega()
        		
        	}
        }
    }
};

</script>
