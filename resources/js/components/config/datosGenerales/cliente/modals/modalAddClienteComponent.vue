<template>
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
                                    <v-text-field label="Nombre del Contacto" outlined v-model="model.nombre_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Cargo del Contacto" outlined v-model="model.telefono_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Tefl, Ext. del Contacto" outlined v-model="model.cargo_contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Correo del Contacto" outlined v-model="model.correo_contacto"></v-text-field>
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
                                    <v-text-field label="Razon Social" outlined v-model="model.razon_social"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Domicilio Fiscal" outlined v-model="model.domicilio_fiscal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Ciudad" outlined v-model="model.ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Estado" outlined v-model="model.estado"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="R.F.C." outlined v-model="model.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="C.P." outlined v-model="model.cp"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Telefonos" outlined v-model="model.telefono_empresa"></v-text-field>
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
                                    <v-text-field label="Domicilio de servicio" outlined v-model="model.domicilio_servicio"></v-text-field>
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
                                    <v-text-field label="Compras" outlined v-model="model.info_cli_compras"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Compras" outlined v-model="model.info_cli_compras_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Compras" outlined v-model="model.info_cli_compras_telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Pagos" outlined v-model="model.info_cli_pagos"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Pagos" outlined v-model="model.info_cli_pagos_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Pagos" outlined v-model="model.info_cli_pagos_telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Almacen" outlined v-model="model.info_cli_almacen"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Almacen" outlined v-model="model.info_cli_almacen_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Almacen" outlined v-model="model.info_cli_almacen_telefono"></v-text-field>
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
                                    <v-text-field label="Dias de Revision" outlined v-model="model.dias_de_revision"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horario de Revision" outlined v-model="model.dias_de_revision_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Dias de Confirmacion" outlined v-model="model.dias_de_confirmacion"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horarios de Confirmacion" outlined v-model="model.dias_de_confirmacion_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Dias de pago" outlined v-model="model.dias_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Horarios de pago" outlined v-model="model.dias_de_pago_horario"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Nombre Responsable de Pago" outlined v-model="model.nombre_de_la_persona_responsable_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Cargo Responsable de Pago" outlined v-model="model.nombre_de_la_persona_responsable_de_pago_puesto_cargo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Telefono Responsable de Pago" outlined v-model="model.nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo Responsable de Pago" outlined v-model="model.nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Metodo de Pago" outlined v-model="model.metodo_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="C.F.D.I." outlined v-model="model.cfdi"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Forma de Pago" outlined v-model="model.forma_de_pago"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Correo para el envio de la factura" outlined v-model="model.correo_electronico_para_el_envio_de_factura"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Se Requiere Orden de Compra para facturar" outlined v-model="model.se_requiere_orden_de_compra_para_facturar"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="I.V.A." outlined v-model="model.iva"></v-text-field>
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
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.servicio_solicitado"></v-text-field>
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
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.nombre_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.telefono_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.fecha_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.puesto_quien_brinda_la_info"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="model.correo_quien_brinda_la_info"></v-text-field>
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
                                    <v-text-field label="Servicio Solicitado" outlined v-model="sucursal.nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field label="Servicio Solicitado" outlined v-model="sucursal.direccion"></v-text-field>
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
                                                <tr v-for="(item, s) in model.sucursales" :key="s">
                                                    <td class="text-center">{{ item.nombre }}</td>
                                                    <td class="text-center">{{ item.direccion }}</td>
                                                    <td class="text-center">{{ item.telefono }}</td>
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
                    <v-btn text color="blue" @click="addCliente"> Agregar </v-btn>
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
} from "vuex";
export default {
    data() {
        return {
            rules: {
                required: (value) => !!value || "Este campo es requerido.",
            },
            sucursal: {
                nombre: "",
                direccion: "",
                telefono: "",
            },
            model: {
                nombre_contacto: "",
                telefono_contacto: "",
                cargo_contacto: "",
                correo_contacto: "",
                razon_social: "",
                domicilio_fiscal: "",
                ciudad: "",
                estado: "",
                rfc: "",
                cp: "",
                telefono_empresa: "",
                domicilio_servicio: "",
                info_cli_compras: "",
                info_cli_compras_correo: "",
                info_cli_compras_telefono: "",
                info_cli_pagos: "",
                info_cli_pagos_correo: "",
                info_cli_pagos_telefono: "",
                info_cli_almacen: "",
                info_cli_almacen_correo: "",
                info_cli_almacen_telefono: "",
                dias_de_revision: "",
                dias_de_revision_horario: "",
                dias_de_confirmacion: "",
                dias_de_confirmacion_horario: "",
                dias_de_pago: "",
                dias_de_pago_horario: "",
                nombre_de_la_persona_responsable_de_pago: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo: "",
                metodo_de_pago: "",
                cfdi: "",
                forma_de_pago: "",
                correo_electronico_para_el_envio_de_factura: "",
                se_requiere_orden_de_compra_para_facturar: "",
                servicio_solicitado: '',
                nombre_quien_brinda_la_info: "",
                telefono_quien_brinda_la_info: "",
                fecha_quien_brinda_la_info: "",
                puesto_quien_brinda_la_info: "",
                correo_quien_brinda_la_info: "",
                iva: '',
                sucursales: [],
            },
        };
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_add_clientes",
            "empleados",
            "ciudades_estados_paises",
            "list_metodo_de_pago",
            "listCondicionDePago",
        ]),
        openDialog: {
            get() {
                return this.dialog_add_clientes;
            },
            set(val) {
                this.$store.commit("SetDialogAddCliente", val);
            },
        },
    },
    async mounted() {
        await this.services.metodoDePagoServices.getlistMetodoDePago();
        await this.services.condicionDePagoServices.getlistCondicionDePago();
    },
    methods: {
        async addCliente() {
            await this.services.clienteServices.agregarCliente(this.model);
            await this.services.clienteServices.getlistclientes();
            this.model = {
                nombre_contacto: "",
                telefono_contacto: "",
                cargo_contacto: "",
                correo_contacto: "",
                razon_social: "",
                domicilio_fiscal: "",
                ciudad: "",
                estado: "",
                rfc: "",
                cp: "",
                telefono_empresa: "",
                domicilio_servicio: "",
                info_cli_compras: "",
                info_cli_compras_correo: "",
                info_cli_compras_telefono: "",
                info_cli_pagos: "",
                info_cli_pagos_correo: "",
                info_cli_pagos_telefono: "",
                info_cli_almacen: "",
                info_cli_almacen_correo: "",
                info_cli_almacen_telefono: "",
                dias_de_revision: "",
                dias_de_revision_horario: "",
                dias_de_confirmacion: "",
                dias_de_confirmacion_horario: "",
                dias_de_pago: "",
                dias_de_pago_horario: "",
                nombre_de_la_persona_responsable_de_pago: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo_telf: "",
                nombre_de_la_persona_responsable_de_pago_puesto_cargo_correo: "",
                metodo_de_pago: "",
                cfdi: "",
                forma_de_pago: "",
                correo_electronico_para_el_envio_de_factura: "",
                se_requiere_orden_de_compra_para_facturar: "",
                servicio_solicitado: '',
                nombre_quien_brinda_la_info: "",
                telefono_quien_brinda_la_info: "",
                fecha_quien_brinda_la_info: "",
                puesto_quien_brinda_la_info: "",
                correo_quien_brinda_la_info: "",
                sucursales: [],
            }
        },
        AgregarSucursal() {
            this.model.sucursales.push(this.sucursal);
        },
        eliminarSucursal(suc) {
            var index = this.model.sucursales.indexOf(suc);
            this.model.sucursales.splice(index, 1);
        },
    },
};
</script>
