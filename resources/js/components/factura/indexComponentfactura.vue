<template>
<v-app>

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12">
                    <v-select :items="tipo_de_factura" v-model="tipoFacturaSelected" label="Seleccionar el tipo de factura" item-text="name" return-object outlined clearable />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" v-if="tipoFacturaSelected.value == 1">
                    <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                            <v-autocomplete :items="recibos" v-model="model.recibo" item-text="id" return-object label="Recibos" outlined clearable>
                                <template v-slot:item="{item}">
                                    Recibo: {{item.id}} - {{item.has_cotizaicon.has_cliente.razon_social}}
                                    <v-alert color="primary" dark :value="true" class="ml-4" dense small style="position: relative; top: 8px; height: 23px; padding-top: 0px;">
                                        {{item.estado}}
                                    </v-alert>
                                </template>
                                <template v-slot:selection="{item}">
                                    Recibo: {{item.id}} - {{item.has_cotizaicon.has_cliente.razon_social}}
                                </template>
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6" v-if="model.recibo.has_cotizaicon">
                            <v-text-field label="Cliente" v-model="model.recibo.has_cotizaicon.has_cliente.razon_social" outlined disabled />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="4" lg="4" v-if="model.recibo.has_cotizaicon">
                            <v-text-field label="Cotizacion" v-model="model.recibo.has_cotizaicon.id" outlined disabled />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2" v-if="model.recibo.has_cotizaicon">
                            <v-text-field label="Moneda" v-model="model.recibo.has_cotizaicon.has_moneda.clave" outlined disabled />
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6">
                            <v-text-field label="Forma de pago" v-model="model.recibo.forma_de_pago" outlined />
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6">
                            <v-text-field label="Metodo de pago" v-model="model.recibo.metodo_de_pago" outlined />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-textarea outlined label="NOTA" v-model="model.recibo.nota_de_factura" outlined />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" v-if="tipoFacturaSelected.value == 2">
                    <v-row>
                        <v-col cols="12" xs="12" sm="6" md="6">
                            <v-autocomplete :items="monedas" v-model="model.factura_nueva.moneda" item-text="nombre_moneda" return-object label="Moneda" outlined clearable />
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6">
                            <v-autocomplete :items="empleados" v-model="model.factura_nueva.vendedor" item-text="nombre_completo" return-object label="Vendedor" outlined clearable />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-text-field label="Forma de pago" v-model="model.recibo.forma_de_pago" outlined />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-text-field label="Metodo de pago" v-model="model.recibo.metodo_de_pago" outlined />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-autocomplete :items="clientes" v-model="model.factura_nueva.cliente" item-text="razon_social" return-object label="Cliente" outlined clearable />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12">
                            <v-textarea outlined label="NOTA" v-model="model.factura_nueva.nota_de_factura" outlined />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-data-table :headers="headers_partidas_factura" :items="model.recibo.has_partidas" :items-per-page="5" class="elevation-1">
                <template v-slot:header="{ props: { headers } }">
                    <thead>
                        <tr>
                            <th :colspan="headers.length">
                                <v-row>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-text-field label="cantidad" small dense class="m-0 p-0" outlined v-model="instrumentoSelected.cantidad" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-select :items="tipo_de_servicio" item-text="name" return-object label="concepto" outlined small dense v-model="instrumentoSelected.concepto" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-autocomplete :items="instrumentos" item-text="nombre" return-object label="instrumento" item-value="id" outlined small dense v-model="instrumentoSelected.instrumento">
                                            <template v-slot:item="{item}">
                                                {{item.id}} - {{item.nombre}} - {{item.alcance}}
                                            </template>
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-text-field label="precio unitario" small dense class="m-0 p-0" outlined v-model="instrumentoSelected.instrumento.precio_venta" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-text-field label="Marca" small dense class="m-0 p-0" outlined v-model="instrumentoSelected.marca" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-text-field label="Modelo" small dense class="m-0 p-0" outlined v-model="instrumentoSelected.modelo" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-text-field label="Serie" small dense class="m-0 p-0" outlined v-model="instrumentoSelected.serie" />
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                        <v-btn color="primary" small dense block @click="addPartida(item)">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </th>
                        </tr>
                    </thead>
                </template>
                <template v-slot:item.has_intrumento="{item}">
                    <td class="text-center">
                        {{item.has_intrumento.nombre}}<br />
                        ID:{{item.informe_id}}<br />
                        Marca:{{item.marca}}<br />
                        Modelo:{{item.modelo}}<br />
                        Serie:{{item.serie}}<br />
                    </td>
                </template>
                <template v-slot:item.servicio="{item}">
                    <td class="text-center">
                        Servicio de {{item.servicio}}
                    </td>
                </template>
                <template v-slot:item.has_intrumento.precio_venta="{item}">
                    <td clas="text-center">
                        {{item.has_intrumento.precio_venta | numberFormat(model.recibo.has_cotizaicon.has_moneda.clave)}}
                    </td>
                </template>
                <template v-slot:item.importe="{item}">
                    <td clas="text-center">
                        {{item.importe | numberFormat(model.recibo.has_cotizaicon.has_moneda.clave)}}
                    </td>
                </template>
                <template v-slot:item.accion="{item}">
                    <td clas="text-center">
                        <v-btn color="error" icon fab @click="EliminarPartida(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </template>
                <template v-slot:footer>
                    <v-container>
                        <v-row v-if="Object.entries(model.recibo).length > 3">
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                                <h3 class="float-right">SUBTOTAL: {{var_computed_subtotal | numberFormat(model.recibo.has_cotizaicon.has_moneda.clave)}}</h3>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                                <h3 class="float-right">IVA<small>({{model.recibo.has_cotizaicon.has_cliente.iva}}%)</small> : {{var_computed_iva | numberFormat(model.recibo.has_cotizaicon.has_moneda.clave)}}</h3>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                                <h3 class="float-right">TOTAL: {{var_computed_total | numberFormat(model.recibo.has_cotizaicon.has_moneda.clave)}}</h3>
                            </v-col>
                        </v-row>
                    </v-container>
                </template>
            </v-data-table>
        </v-col>
    </v-row>
</v-app>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            model: {
                recibo: {
                    forma_de_pago: '',
                    metodo_de_pago: '',
                    nota_de_factura: '',
                },
                factura_nueva: {
                    cliente: {},
                    moneda: {},
                    vendedor: {},
                    forma_de_pago: '',
                    metodo_de_pago: '',
                    nota_de_factura: '',
                }
            },
            instrumentoSelected: {
                cantidad: 1,
                concepto: {
                    name: "Calibracion",
                    value: 1,
                },
                instrumento: {},
                importe: '',
                marca: '',
                modelo: '',
                serie: ''
            },
            tipo_de_factura: [{
                    name: 'Generar factura desde  los recibos',
                    value: 1
                },
                {
                    name: 'Generar factura en blanco',
                    value: 2
                },
            ],
            tipoFacturaSelected: {},
            headers_partidas_factura: [{
                    text: 'Cantidad',
                    sorable: false,
                    align: 'center',
                    value: 'cantidad'
                },
                {
                    text: 'Concepto',
                    sorable: false,
                    align: 'center',
                    value: 'servicio'
                },
                {
                    text: 'Instrumento',
                    sorable: false,
                    align: 'center',
                    value: 'has_intrumento'
                },
                {
                    text: 'Precio unitario',
                    sorable: false,
                    align: 'center',
                    value: 'has_intrumento.precio_venta'
                },
                {
                    text: 'Importe',
                    sorable: false,
                    align: 'center',
                    value: 'importe'
                },
                {
                    text: 'Accion',
                    sorable: false,
                    align: 'center',
                    value: 'accion'
                },
            ],
            tipo_de_servicio: [{
                    name: "Calibracion",
                    value: 1,
                },
                {
                    name: "Reparacion",
                    value: 2,
                },
                {
                    name: "Garantia",
                    value: 3,
                },
                {
                    name: "Venta",
                    value: 4,
                },
            ],
        }
    },
    computed: {
        ...mapGetters(['services', 'recibos', 'clientes', 'monedas', 'empleados', 'instrumentos']),
        var_computed_subtotal: {
            get() {
                var result = 0;
                if (Object.entries(this.recibos).length > 3) {

                    for (var i = 0; this.model.recibo.has_partidas.length > i; i++) {
                        result += (this.model.recibo.has_partidas[i].cantidad * this.model.recibo.has_partidas[i].has_intrumento.precio_venta)
                    }

                    return result
                }
            },
            set(val) {
                this.model.recibo.has_partidas = val
            }
        },
        var_computed_iva: {
            get() {
                var result = 0;
                if (Object.entries(this.recibos).length > 3) {

                    result = (this.var_computed_subtotal * this.model.recibo.has_cotizaicon.has_cliente.iva) / 100

                    return result
                }
            },
            set(val) {
                this.model.recibo = val
            }
        },
        var_computed_total: {
            get() {
                var result = 0;
                if (Object.entries(this.recibos).length > 3) {

                    result = this.var_computed_subtotal + this.var_computed_iva

                    return result
                }
            },
            set(val) {
                this.model.recibo = val
            }
        }

    },
    async mounted() {
        await this.services.reciboServices.getlistRecibos()
        await this.services.clienteServices.getlistclientes()
        await this.services.monedaServices.getlistMonedas()
        await this.services.empleadoServices.getlistEmpleados()
        await this.services.instrumentoServices.getlistInstrumentos()
    },
    methods: {
        async addPartida() {
            try {
                var model = {
                    cantidad: this.instrumentoSelected.cantidad,
                    has_intrumento: this.instrumentoSelected.instrumento,
                    importe: (this.instrumentoSelected.cantidad * this.instrumentoSelected.instrumento.precio_venta),
                    marca: this.instrumentoSelected.marca,
                    modelo: this.instrumentoSelected.modelo,
                    serie: this.instrumentoSelected.serie,
                    id: this.model.recibo.has_partidas[this.model.recibo.has_partidas.length - 1].id + 1

                }
                this.model.recibo.has_partidas.push(model)
                this.instrumentoSelected = {
                    cantidad: 1,
                    concepto: {
                        name: "Calibracion",
                        value: 1,
                    },
                    instrumento: {},
                }
            } catch (e) {
                console.log(e)
            }
        },
        EliminarPartida(item) {
            // var index = this.model.recibo.has_partidas.find(item => item.id == item.id)
            console.log({
                // index,
                item
            })

        }
    }
}
</script>
