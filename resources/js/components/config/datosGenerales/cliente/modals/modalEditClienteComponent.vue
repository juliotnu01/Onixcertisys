<template>
<!--<v-app>
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
</v-app>-->
<v-app>
    <v-dialog v-model="openDialog" max-width="2556" min-width="2556">
        <v-card>
            <v-card-title>Agregar cliente</v-card-title>
            <v-container>
                <v-card-text>
                    <v-card class="elevation-1">
                        <v-card-title primary-title>
                            DATOS DEL CONTACTO
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Nombre del Contacto" outlined v-model="cliente.nombre_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Cargo del Contacto" outlined v-model="cliente.cargo_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Tefl, Ext. del Contacto" outlined v-model="cliente.telefono_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Correo del Contacto" outlined v-model="cliente.correo_contacto"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            DATOS FISCALES
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Razon Social" outlined v-model="cliente.razon_social"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Domicilio Fiscal" outlined v-model="cliente.domicilio_fiscal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Ciudad" outlined v-model="cliente.ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Estado" outlined v-model="cliente.estado"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="R.F.C." outlined v-model="cliente.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="C.P." outlined v-model="cliente.cp"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Telefonos" outlined v-model="cliente.telefono_empresa"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            DOMICILIO DE SERVICIO
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field label="Domicilio de servicio" outlined v-model="cliente.domicilio_servicio"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            INFORMACION DEL CLIENTE
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Compras" outlined v-model="cliente.info_cli_compras"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Compras" outlined v-model="cliente.info_cli_compras_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Compras" outlined v-model="cliente.info_cli_compras_telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Pagos" outlined v-model="cliente.info_cli_pagos"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Pagos" outlined v-model="cliente.info_cli_pagos_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Pagos" outlined v-model="cliente.info_cli_pagos_telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Almacen" outlined v-model="cliente.info_cli_almacen"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Almacen" outlined v-model="cliente.info_cli_almacen_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Almacen" outlined v-model="cliente.info_cli_almacen_telefono"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            REVISON Y PAGOS
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Dias de Revision" outlined v-model="cliente.dias_de_revision"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horario de Revision" outlined v-model="cliente.dias_de_revision_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Dias de Confirmacion" outlined v-model="cliente.dias_de_confirmacion"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horarios de Confirmacion" outlined v-model="cliente.dias_de_confirmacion_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Dias de pago" outlined v-model="cliente.dias_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horarios de pago" outlined v-model="cliente.dias_de_pago_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Nombre Responsable de Pago" outlined v-model="cliente.nombre_de_la_persona_responsable_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Cargo Responsable de Pago" outlined v-model="cliente.nombre_de_la_persona_responsable_de_pago_puesto_cargo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Responsable de Pago" outlined v-model="cliente.nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Responsable de Pago" outlined v-model="cliente.nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Metodo de Pago" outlined v-model="cliente.metodo_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="C.F.D.I." outlined v-model="cliente.cfdi"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Forma de Pago" outlined v-model="cliente.forma_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo para el envio de la factura" outlined v-model="cliente.correo_electronico_para_el_envio_de_factura"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Se Requiere Orden de Compra para facturar" outlined v-model="cliente.se_requiere_orden_de_compra_para_facturar"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="I.V.A." outlined v-model="cliente.iva"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            SERVICIO SOLICITADO
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="cliente.servicio_solicitado"></v-text-field>
                                </v-col>

                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            DATOS DE LA PERSONA QUE BRINDA LA INFORMACION:
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Nombre quien Brinda la informacion" outlined v-model="cliente.nombre_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono quien Brinda la informacion" outlined v-model="cliente.telefono_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="fecha quien Brinda la informacion" outlined v-model="cliente.fecha_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="cargo quien Brinda la informacion" outlined v-model="cliente.puesto_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="correo quien Brinda la informacion" outlined v-model="cliente.correo_quien_brinda_la_info"></v-text-field>
                                </v-col>

                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-5 elevation-1">
                        <v-card-title primary-title>
                            Agregar Sucursal
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="sucursal.nombre_sucursal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="sucursal.direccion_sucursal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="sucursal.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-btn color="success" @click="AgregarSucursal" block>Agregar</v-btn>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center">
                                                        Nombre
                                                    </th>
                                                    <th class="text-center">
                                                        Direccion
                                                    </th>
                                                    <th class="text-center">
                                                        Telefono
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, s) in cliente.has_sucursal" :key="s">
                                                    <td class="text-center">
                                                        <v-text-field label="" outlined v-model="item.nombre_sucursal" small dense></v-text-field>
                                                    </td>
                                                    <td class="text-center">
                                                        <v-text-field label="" outlined v-model="item.direccion_sucursal" small dense></v-text-field>
                                                    </td>
                                                    <td class="text-center">
                                                        <v-text-field label="" outlined v-model="item.telefono " small dense></v-text-field>
                                                    </td>
                                                    <td class="text-center">
                                                        <v-btn color="error" @click="eliminarSucursal(item)" icon ><v-icon>mdi-delete</v-icon></v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="blue" @click="addCliente"> Editar </v-btn>
                    <v-btn text color="red" @click="openDialog = false"> Cerrar </v-btn>
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
                await this.services.clienteServices.actualizarCliente(this.cliente)
                await this.services.clienteServices.getlistclientes()
        },
        AgregarSucursal() {
            this.cliente.has_sucursal.push(this.sucursal)
            this.sucursal =  {
                nombre_sucursal: '',
                direccion_sucursal: '',
                telefono: '',
            }
        },
        async eliminarSucursal(suc){
            console.log({suc})
               await this.services.clienteServices.EliminarSucursalCliente(suc)
               var index  = this.cliente.has_sucursal.indexOf(suc)
               this.cliente.has_sucursal.splice(index, 1)
        }

    }
};
</script>
