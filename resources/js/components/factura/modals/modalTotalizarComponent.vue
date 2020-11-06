<template>
<div class="text-center">
    <v-dialog v-model="openDialog" width="1256">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="openDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-row v-if="Object.entries(factura).length > 0 ">
                    <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                        <div>
                            <h4>Cliente:{{factura.cliente.has_cliente.razon_social}}</h4>
                            <h4>Dirección:{{factura.cliente.has_cliente.direccion_fiscal}} - {{factura.cliente.has_cliente.ciudad_estad_pais}}</h4>
                            <h4>Teléfono:{{factura.cliente.has_cliente.telefono}}</h4>
                            <h4>Correo:{{factura.cliente.has_cliente.correo_electronico_factura}}</h4>
                            <!--<h4>Metodo de pago:{{factura.cliente.has_cliente.has_metodo_de_pago.nombre}}</h4>
                            <h4>Forma de pago :{{factura.cliente.has_cliente.has_condicion_de_pago.nombre}}</h4>-->

                            <h4 class="text-right">Vendedor:{{factura.cliente.has_empleado.nombre_completo}}</h4>
                            <h4 class="text-right">Fecha:{{fecha}}</h4><br />
                        </div>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                        <v-simple-table dense>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Orden de servicio
                                        </th>
                                        <th class="text-left">
                                            Cotizacion
                                        </th>
                                        <th class="text-left">
                                            ID
                                        </th>
                                        <th class="text-left">
                                            Concepto
                                        </th>
                                        <th class="text-left">
                                            Instrumento
                                        </th>
                                        <th class="text-left">
                                            Estado de la calibracion
                                        </th>
                                        <th class="text-left">
                                            Precio Unitario
                                        </th>
                                        <th class="text-left">
                                            Importe
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in factura.partidas" :key="item.name">
                                        <td class="text-left">{{ item.reciboID }}</td>
                                        <td class="text-left">{{ item.cotizacionID }}</td>
                                        <td class="text-left">{{ item.informe_id }}</td>
                                        <td class="text-left">
                                            Servicio de {{item.servicio}}
                                        </td>
                                        <td class="text-left">
                                            {{item.has_intrumento.nombre}}<br />
                                            ID:{{item.identificacion}}<br />
                                            Marca:{{item.marca}}<br />
                                            Modelo:{{item.modelo}}<br />
                                            Serie:{{item.serie}}<br />
                                        </td>
                                        <td clas="text-left">
                                            <v-alert dense outlined type="error" v-if="!item.has_calibracion" class="m-0 p-0">
                                                por iniciar
                                            </v-alert>
                                            <v-alert dense outlined type="warning" v-else-if="item.has_calibracion.estado === 'en proceso'" class="m-0 p-0">
                                                {{item.has_calibracion.estado }}
                                            </v-alert>
                                            <v-alert dense outlined type="success" v-else class="m-0 p-0">
                                                {{item.has_calibracion.estado }}
                                            </v-alert>
                                        </td>
                                        <td clas="text-left">
                                            {{item.has_intrumento.precio_venta | numberFormat(Object.entries(factura).length > 0 ? factura.cliente.has_moneda.clave: '' )}}
                                        </td>
                                        <td clas="text-left">
                                            {{item.importe | numberFormat(Object.entries(factura).length > 0 ? factura.cliente.has_moneda.clave: '' )}}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colspan="8">
                                            <h3 class=" text-right">SUBTOTAL: {{factura.subtotal | numberFormat(Object.entries(factura).length > 0 ? factura.cliente.has_moneda.clave: '' )}}</h3>
                                            <h3 class="text-right">IVA : {{factura.iva |numberFormat(Object.entries(factura).length > 0 ? factura.cliente.has_moneda.clave: '' )}}</h3>
                                            <h3 class="text-right">TOTAL: {{factura.total |numberFormat(Object.entries(factura).length > 0 ? factura.cliente.has_moneda.clave: '' )}}</h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="RegistrarFactura">
                    Registrar Factura
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import moment from 'moment';
export default {
    data() {
        return {
            fecha: moment().format('l')
        }
    },
    computed: {
        ...mapGetters(['services', 'dialog_add_factura', 'factura']),
        openDialog: {
            get() {
                return this.dialog_add_factura;
            },
            set(val) {
                this.$store.commit("setDialogAddFactura", val);
            },
        },
    },
    methods: {
        async RegistrarFactura() {
            try {
                this.services.facturaServices.agregarFactura(this.factura)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
