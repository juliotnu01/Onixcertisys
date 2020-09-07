<template>
    <v-app>
        <v-dialog v-model="openDialogEditar" width="400">
            <v-card>
                <v-card-title>Editar Magnitud</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_mag">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Clave" outlined v-model="magnitud.clave"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="12" >
                                    <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="magnitud.nombre"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addMagnitudes" >
                            Agregar 
                        </v-btn>
                        <v-btn text color="red" @click.prevent="openDialogEditar = false"  >
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
        }
    },
    computed: {
        ...mapGetters([
        	'services',
            'dialog_edit_magnitudes',
            'magnitud_edit'
        ]),
        openDialogEditar:{
        	get(){
        		return this.dialog_edit_magnitudes
        	},
        	set(val){
        		this.$store.commit('setDialogEditMagnitudes', val)
        	}
        },
        magnitud: {
            get(){
                return this.magnitud_edit
            },
            set(val){
                this.magnitud_edit = val
            }
        }
        
    },
    mounted() {
    },
    methods: {
        async addMagnitudes(){
        	if (this.$refs.f_mag.validate()) {
        		await this.services.magnitudesServices.editarMagnitud(this.magnitud)
        		await this.services.magnitudesServices.getListMagnitudes()
        		
        	}
        }
    }
};

</script>
