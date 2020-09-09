<template>
    <v-app>
        <v-dialog v-model="openDialog" width="700">
            <v-card>
                <v-card-title>Agregar cliente</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_mag">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Nombre / Razon Social" outlined v-model="model.razon_social"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Direccion Fiscal" outlined v-model="model.direccion_fiscal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                      <v-text-field :rules="[rules.required]" label="Ciudad / Estado / Pais" outlined v-model="model.ciudad_estad_pais"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                      <v-text-field :rules="[rules.required]" label="R.F.C" outlined v-model="model.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Codigo Postal" outlined v-model="model.codigo_postal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Teléfono" outlined v-model="model.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Descuento (%)" outlined v-model="model.descuento"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Correo Electronico para la factura" outlined v-model="model.correo_electronico_factura"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Sitio Web" outlined v-model="model.sitio_web"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-select :items="empleados" label="Vendedor" outlined item-text="nombre_completo" return-object  v-model="model.vendedor" />
                                </v-col>
                                 <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Credito (%)" outlined v-model="model.credito"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click="addCliente" >
                            Agregar
                        </v-btn>
                        <v-btn text color="red" >
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
                razon_social: '',
                direccion_fiscal: '',
                ciudad_estad_pais: '',
                codigo_postal: '',
                rfc: '',
                telefono: '',
                descuento: '',
                correo_electronico_factura: '',
                sitio_web: '',
                vendedor: '',
                credito: '',
            }
        }
    },
    computed: {
        ...mapGetters([
            'services',
            'dialog_add_clientes',
            'empleados',
            'ciudades_estados_paises'
        ]),
        openDialog: {
            get() {
                return this.dialog_add_clientes
            },
            set(val) {
                this.$store.commit('SetDialogAddCliente', val)
            }
        }

    },
    mounted() {
    },
    methods: {
        async addCliente() {
            if (this.$refs.f_mag.validate()) {
                await this.services.clienteServices.agregarCliente(this.model)
                await this.services.clienteServices.getlistclientes()
                this.model = {
                    razon_social: '',
                    direccion_fiscal: '',
                    ciudad_estad_pais: '',
                    codigo_postal: '',
                    rfc: '',
                    telefono: '',
                    descuento: '',
                    correo_electronico_factura: '',
                    sitio_web: '',
                    Vendedor: '',
                    credito: '',
                }
            }
        }
    }
};

</script>
