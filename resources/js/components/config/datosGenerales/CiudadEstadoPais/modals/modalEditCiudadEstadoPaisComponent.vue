<template>
    <v-app>
        <v-dialog v-model="openDialog" width="400">
            <v-card>
                <v-card-title>Editar Ciudad / Estado / Pais</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_cep">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Ciudad" outlined v-model="ciudad_estado_pais.nombre_ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Estado" outlined v-model="ciudad_estado_pais.nombre_estado"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Pais" outlined v-model="ciudad_estado_pais.nombre_pais"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="EditCiudadEstadoPais" >
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
            	nombre_ciudad: '',
            	nombre_estado: '',
            	nombre_pais: ''
            }
        }
    },
    computed: {
        ...mapGetters([
        	'services',
            'dialog_edit_ciudad_estad_pais',
            'ciudad_estado_pais'
        ]),
        openDialog:{
        	get(){
        		return this.dialog_edit_ciudad_estad_pais
        	},
        	set(val){
        		this.$store.commit('setDialogEditCiudadEstadoPais', val)
        	}
        }
        
    },
    mounted() {
    },
    methods: {
        async EditCiudadEstadoPais(){
        	if (this.$refs.f_cep.validate()) {
        		await this.services.ciudadEstadoPaisServices.actualizarCiudadEstadoPais(this.ciudad_estado_pais)
                await this.services.ciudadEstadoPaisServices.getlistCiudadEstadoPais()
        	}
        }
    }
};

</script>
