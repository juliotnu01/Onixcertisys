<template>
<v-app>
    <v-dialog v-model="openDialog" width="400">
        <v-card>
            <v-card-title>Agregar Acreditacion</v-card-title>
            <v-container>
                <v-card-text>
                    <v-form ref="f_mag">
                        <v-row align="center" justify="space-around">
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="model.nombre"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="blue" @click.prevent="addAcreditacion">
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
import {
    mapGetters
} from 'vuex'
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
            'dialog_add_acreditacion'
        ]),
        openDialog: {
            get() {
                return this.dialog_add_acreditacion
            },
            set(val) {
                this.$store.commit('setdialogAddAcreditacion', val)
            }
        }

    },
    mounted() {},
    methods: {
        async addAcreditacion() {
            if (this.$refs.f_mag.validate()) {
                await this.services.acreditacionesServices.agregarAcreditaciones(this.model)
                await this.services.acreditacionesServices.getlistAcreditaciones()
                this.model = {
                    nombre: '',
                }
            }
        }
    }
};
</script>
