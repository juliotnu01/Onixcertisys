<template>
    <v-app>
        <v-dialog v-model="openDialog" width="700">
            <v-card>
                <v-card-title>Editar cliente</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_mag">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Nombre / Razon Social" outlined v-model="cliente.razon_social"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Direccion Fiscal" outlined v-model="cliente.direccion_fiscal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                      <v-text-field :rules="[rules.required]" label="Ciudad / Estado / Pais" outlined v-model="cliente.ciudad_estad_pais"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                      <v-text-field :rules="[rules.required]" label="R.F.C" outlined v-model="cliente.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Codigo Postal" outlined v-model="cliente.codigo_postal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Teléfono" outlined v-model="cliente.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Descuento (%)" outlined v-model="cliente.descuento"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Correo Electronico para la factura" outlined v-model="cliente.correo_electronico_factura"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Sitio Web" outlined v-model="cliente.sitio_web"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-select :items="empleados" label="Vendedor" outlined item-text="nombre_completo" return-object  v-model="cliente.vendedor" />
                                </v-col>
                                 <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Credito (%)" outlined v-model="cliente.credito"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click="addCliente" >
                            Editar
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
            'dialog_edit_cliente',
            'empleados',
            'cliente',
        ]),
        openDialog: {
            get() {
                return this.dialog_edit_cliente
            },
            set(val) {
                this.$store.commit('setDialogEditCliente', val)
            }
        }

    },
    mounted() {
        
    },
    methods: {
        async addCliente() {
            if (this.$refs.f_mag.validate()) {
                await this.services.clienteServices.actualizarCliente(this.cliente)
                await this.services.clienteServices.getlistclientes()
                
            }
        }
    }
};

</script>
