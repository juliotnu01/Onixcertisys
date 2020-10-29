<template>
<v-app>
    <v-dialog v-model="openDialog" width="1024">
        <v-card>
            <v-card-title>Agregar cliente</v-card-title>
            <v-container>
                <v-card-text>
                    <v-form ref="f_mag">
                        <v-row align="center" justify="space-around">
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Nombre / Razon Social" outlined v-model="model.razon_social"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Direccion Fiscal" outlined v-model="model.direccion_fiscal"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-autocomplete v-model="model.metodo_de_pago" :items="list_metodo_de_pago" outlined label="Metodo de pago" return-object item-text="nombre"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-autocomplete v-model="model.condicion_de_pago" :items="listCondicionDePago" outlined label="Condicion de pago" return-object item-text="nombre"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Ciudad / Estado / Pais" outlined v-model="model.ciudad_estad_pais"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="R.F.C" outlined v-model="model.rfc"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Codigo Postal" outlined v-model="model.codigo_postal"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Teléfono" outlined v-model="model.telefono"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Descuento (%)" outlined v-model="model.descuento"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Correo Electronico para la factura" outlined v-model="model.correo_electronico_factura"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Nombre Contacto" outlined v-model="model.nombre_completo"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Teléfono Contacto" outlined v-model="model.telefono_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Celular Contacto" outlined v-model="model.celular_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Correo Electronico Contacto" outlined v-model="model.correo_contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="IVA (%)" outlined v-model="model.iva"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field label="Sitio Web" outlined v-model="model.sitio_web"></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-select :items="empleados" label="Vendedor" outlined item-text="nombre_completo" return-object v-model="model.vendedor" />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-text-field label="Credito (%)" outlined v-model="model.credito"></v-text-field>
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
                                            <tr>
                                                <td colspan="4">
                                                    <v-row justify="center">
                                                        <v-col cols="3">
                                                            <v-text-field class="m-0 p-0 text-center" dense small label="Nombre Sucursal" v-model="sucursal.nombre" />
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field class="m-0 p-0 text-center" dense small label="Direccion Sucursal" v-model="sucursal.direccion" />
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field class="m-0 p-0 text-center" dense small label="telefono Sucursal" v-model="sucursal.telefono" />
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-btn fab color="primary" @click="AgregarSucursal" class="m-0 p-0" dense small>
                                                                <v-icon>mdi-plus</v-icon>
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </td>
                                            </tr>
                                            <tr v-for="(item , s) in model.sucursales" :key="s">
                                                <td> {{ item.nombre }} </td>
                                                <td> {{ item.direccion }} </td>
                                                <td> {{ item.telefono }} </td>
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
                        Agregar
                    </v-btn>
                    <v-btn text color="red">
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
            sucursal: {
                nombre: '',
                direccion: '',
                telefono: '',
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
                nombre_completo: '',
                telefono_contacto: '',
                celular_contacto: '',
                correo_contacto: '',
                iva: 0,
                metodo_de_pago: {},
                condicion_de_pago: {},
                sucursales: [],
            }
        }
    },
    computed: {
        ...mapGetters([
            'services',
            'dialog_add_clientes',
            'empleados',
            'ciudades_estados_paises',
            'list_metodo_de_pago',
            'listCondicionDePago'
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
    async mounted() {
        await this.services.metodoDePagoServices.getlistMetodoDePago();
        await this.services.condicionDePagoServices.getlistCondicionDePago();
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
                    vendedor: '',
                    credito: '',
                    nombre_completo: '',
                    telefono_contacto: '',
                    celular_contacto: '',
                    correo_contacto: '',
                    iva: 0,
                    metodo_de_pago: {},
                    condicion_de_pago: {},
                }
            }
        },
        AgregarSucursal() {
            this.model.sucursales.push(this.sucursal)
        },
        eliminarSucursal(suc) {
            var index = this.model.sucursales.indexOf(suc)
            this.model.sucursales.splice(index, 1)
        }

    }
};
</script>
