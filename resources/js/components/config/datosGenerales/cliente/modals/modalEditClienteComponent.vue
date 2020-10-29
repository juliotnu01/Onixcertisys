<template>
<v-app>
    <v-dialog v-model="openDialog" width="1024">
        <v-card>
            <v-card-title>Editar cliente</v-card-title>
            <v-container>
                <v-card-text>
                    <v-form ref="f_mag">
                        <v-row align="center" justify="space-around">
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Nombre / Razon Social" outlined v-model="cliente.razon_social"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Direccion Fiscal" outlined v-model="cliente.direccion_fiscal"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-autocomplete v-model="cliente.has_metodo_de_pago" :items="list_metodo_de_pago" outlined label="Metodo de pago" return-object item-text="nombre"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-autocomplete v-model="cliente.has_condicion_de_pago" :items="listCondicionDePago" outlined label="Condicion de pago" return-object item-text="nombre"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Ciudad / Estado / Pais" outlined v-model="cliente.ciudad_estad_pais"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="R.F.C" outlined v-model="cliente.rfc"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Codigo Postal" outlined v-model="cliente.codigo_postal"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Teléfono" outlined v-model="cliente.telefono"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Descuento (%)" outlined v-model="cliente.descuento"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Correo Electronico para la factura" outlined v-model="cliente.correo_electronico_factura"></v-text-field>
                            </v-col>

                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Nombre Contacto" outlined v-model="cliente.nombre_completo"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Teléfono Contacto" outlined v-model="cliente.telefono_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Celular Contacto" outlined v-model="cliente.celular_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Correo Electronico Contacto" outlined v-model="cliente.correo_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="IVA (%)" outlined v-model="cliente.iva"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Sitio Web" outlined v-model="cliente.sitio_web"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-autocomplete :items="empleados" label="Vendedor" outlined item-text="nombre_completo" return-object v-model="cliente.Vendedor" />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Credito (%)" outlined v-model="cliente.credito"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Nombre Sucursal
                                                </th>
                                                <th class="text-left">
                                                    Direccion
                                                </th>
                                                <th class="text-left">
                                                    Telefono
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item , s) in cliente.has_sucursal" :key="s">
                                                <td>
                                                    <v-text-field label="" v-model="item.nombre_sucursal" outlined small dense class="m-0 p-0" />
                                                </td>
                                                <td>
                                                    <v-text-field label="" v-model="item.direccion_sucursal" outlined small dense class="m-0 p-0" />
                                                </td>
                                                <td>
                                                    <v-text-field label="" v-model="item.telefono" outlined small dense class="m-0 p-0" />
                                                </td>
                                                <td>
                                                    <v-btn color="error" icon class="m-0 p-0" dense small @click="eliminarSucursal(item)">
                                                        <v-icon>mdi-delete</v-icon>
                                                    </v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="blue" @click="addCliente">
                        Editar
                    </v-btn>
                    <v-btn text color="red" @click="openDialog = false">
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
            },
            sucursal: {
                nombre_sucursal: '',
                direccion_sucursal: '',
                telefono: '',
            },
        }
    },
    computed: {
        ...mapGetters([
            'services',
            'dialog_edit_cliente',
            'empleados',
            'cliente',
            'list_metodo_de_pago',
            'listCondicionDePago'
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
    async mounted() {
        await this.services.metodoDePagoServices.getlistMetodoDePago();
        await this.services.condicionDePagoServices.getlistCondicionDePago();
    },
    methods: {
        async addCliente() {
            if (this.$refs.f_mag.validate()) {
                await this.services.clienteServices.actualizarCliente(this.cliente)
                await this.services.clienteServices.getlistclientes()
            }
        },
        AgregarSucursal() {
            this.cliente.has_sucursal.push(this.sucursal)
        },
        eliminarSucursal(suc) {
            var index = this.cliente.has_sucursal.indexOf(suc)
            this.cliente.has_sucursal.splice(index, 1)
        }
    }
};
</script>
