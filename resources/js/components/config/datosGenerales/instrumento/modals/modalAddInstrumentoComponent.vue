<template>
    <v-app>
        <v-dialog v-model="openDialog" width="600">
            <v-card>
                <v-card-title>Agregar Instrumento</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_mag">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="model.nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-textarea outlined :rules="[rules.required]" outlined v-model="model.alcance" label="Alcance" ></v-textarea>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-select v-model="model.acreditacion"  :items="acreditaciones" item-text="nombre" return-object label="Acreditación" outlined/>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-select v-model="model.area"  :items="magnitudes" item-text="nombre" return-object  label="Area" outlined/>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Precio Venta" outlined v-model="model.precio_venta"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addIntrumento">
                            Agregar
                        </v-btn>
                        <v-btn text color="red" @click.prevent="openDialog = false">
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
                nombre: '',
                alcance: '',
                acreditacion: '',
                area: '',
                precio_venta: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'services',
            'dialog_add_instrumento',
            'acreditaciones',
            'magnitudes',
        ]),
        openDialog: {
            get() {
                return this.dialog_add_instrumento
            },
            set(val) {
                this.$store.commit('setDialogAddInstrumento', val)
            }
        }

    },
    mounted() {},
    methods: {
        async addIntrumento() {
            if (this.$refs.f_mag.validate()) {
                await this.services.instrumentoServices.agregarInstrumento(this.model)
                await this.services.instrumentoServices.getlistInstrumentos()
                this.model = {
                    clave: '',
                    alcance: '',
                    acreditacion: '',
                    precio_venta: ''
            }
            }
        }
    }
};

</script>
