<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="openDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text dark @click.prevent="addCotizacion" tile>
                <v-icon>mdi-content-save</v-icon> Guardar
            </v-btn>
        </v-toolbar>
        <v-card>
            <v-card-title>Agregar Cotizacion</v-card-title>
            <v-card-text>
                <v-form ref="f_mag">
                    <v-row align="center" justify="space-around">
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="model.cliente_selected" :items="clientes" item-text="razon_social" outlined s label="Seleccionar Cliente" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="model.moneda_selected" :items="monedas" item-text="clave" outlined s label="Seleccionar Moneda" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="model.tde_selected" :items="tiempos_de_entrega" item-text="nombre" outlined s label="Tiempo de Entrega" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="model.empleado_selected" :items="empleados" item-text="nombre_completo" outlined s label="Empleado" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-select offset-y dense v-model="model.tipo_de_servicio_selected" :items="tipo_de_servicio" label="Tipo de Servicio" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-select offset-y dense v-model="model.estado_cotizacion_selected" :items="estado_de_la_cotizacion" label="Estado de la cotizacion" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="model.cliente_selected.nombre_completo" dense outlined label="Contacto" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="model.cliente_selected.celular_contacto" dense outlined label="Teléfono" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="model.cliente_selected.correo_contacto" dense outlined label="Correo" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="model.condiciones" dense outlined label="Condiciones" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-textarea v-model="model.nota_cotizacion" outlined label="Notas de la cotizacion"></v-textarea>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-textarea v-model="model.nota_seguimiento" outlined label="Notas de seguimiento"></v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-text>
                <v-card class="p-1 elevation-2">
                    <v-row>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.identificacion" outlined label="Identicacion" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-select offset-y v-model="partida.servicio" :items="servicio_partida" label="Servicio" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-select offset-y v-model="partida.unidad" :items="unidad_partida" label="Unidad" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-autocomplete offset-y v-model="partida.instrumento" :items="instrumentos" item-text="nombre" outlined s label="Seleccionar Instrumento" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field disabled v-model="partida.instrumento.alcance" outlined label="Alcance" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.cantidad" outlined label="Cantidad" @change="ActualizarImporte(partida.cantidad, partida.instrumento.precio_venta)" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.marca" outlined label="Marca" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.modelo" outlined label="Modelo" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.serie" outlined label="Serie" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field v-model="partida.instrumento.precio_venta" outlined label="Precio Unitario" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field disabled v-model="var_computed_importe_instrumento" outlined label="Importe" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-btn color="primary" block @click="AgregarPartida" small dense>
                                Agregar Partida
                                <v-icon small>mdi-plus</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
                <v-data-table dense :headers="headers_cotizacion" :items="model.partidas" item-key="name" class="elevation-1 mt-5">
                    <template v-slot:item.accion="{ item }">
                        <td>
                            <v-btn icon small color="error" @click="eliminarPartida(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </template>
                    <template v-slot:body.append="{ headers }">
                        <tr>
                            <td :colspan="headers.length">
                                <div class="text-right">
                                    <h3>SUBTOTAL : {{var_computed_sub_total}}</h3>
                                </div>
                                <div class="text-right">
                                    <h3>IVA : {{var_computed_iva}}</h3>
                                </div>
                                <div class="text-right">
                                    <h3>TOTAL : {{var_computed_total}}</h3>
                                </div>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card-text>
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
            tipo_de_servicio: [{
                    name: "normal",
                    value: 1,
                },
                {
                    name: "urgente",
                    value: 2,
                },
                {
                    name: "programado",
                    value: 3,
                },
            ],
            estado_de_la_cotizacion: [{
                    name: "pendiente",
                    value: 1,
                },
                {
                    name: "En recibo",
                    value: 2,
                },
                {
                    name: "Rechazada",
                    value: 3,
                },
            ],
            model: {
                cliente_selected: {},
                moneda_selected: {},
                tde_selected: {},
                empleado_selected: {},
                tipo_de_servicio_selected: {},
                estado_cotizacion_selected: {},
                contacto: "",
                telefono: "",
                correo: "",
                condiciones: "",
                nota_cotizacion: "",
                nota_seguimiento: "",
                partidas: [],
                sub_total: 0,
                iva: 0,
                total: 0,
            },
            partida: {
                identificacion: "",
                instrumento: {},
                cantidad: 0,
                marca: "",
                modelo: "",
                serie: "",
                importe: 0,
                servicio: {},
                unidad: {},
            },
            headers_cotizacion: [{
                    text: "Identicacion",
                    value: "identificacion",
                },
                {
                    text: "Servicio",
                    value: "servicio.name",
                },
                {
                    text: "Unidad",
                    value: "unidad.name",
                },
                {
                    text: "Instrumento",
                    value: "instrumento.nombre",
                },
                {
                    text: "Marca",
                    value: "marca",
                },
                {
                    text: "Modelo",
                    value: "modelo",
                },
                {
                    text: "Serie",
                    value: "serie",
                },
                {
                    text: "Alcance",
                    value: "instrumento.alcance",
                },
                {
                    text: "Acreditacion",
                    value: "instrumento.has_acreditacion.nombre",
                },
                {
                    text: "Cantidad",
                    value: "cantidad",
                },
                {
                    text: "Precio Unitario",
                    value: "instrumento.precio_venta",
                },
                {
                    text: "Importe",
                    value: "importe",
                },
                {
                    text: "Accion",
                    value: "accion",
                },
            ],
            servicio_partida: [{
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
            unidad_partida: [{
                    name: "servicio",
                    Value: 1,
                },
                {
                    name: "Pieza",
                    Value: 2,
                },
                {
                    name: "Juego",
                    Value: 3,
                },
            ],
        };
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_add_cotizacion",
            "clientes",
            "monedas",
            "empleados",
            "tiempos_de_entrega",
            "instrumentos",
        ]),
        openDialog: {
            get() {
                return this.dialog_add_cotizacion;
            },
            set(val) {
                this.$store.commit("setDialogAddCotizacion", val);
            },
        },
        var_computed_importe_instrumento: {
            get() {
                return this.partida.importe;
            },
            set(newVal) {
                this.partida.importe = newVal;
            },
        },
        var_computed_sub_total: {
            get() {
                var result = 0;
                this.model.partidas.forEach((item) => {
                    result += item.importe;
                });
                this.model.sub_total = result;
                return this.model.sub_total;
            },
            set(newVal) {
                this.model.sub_total = newVal;
            },
        },
        var_computed_iva: {
            get() {
                var result = 0,
                    item_iva = 0;
                this.model.partidas.forEach((item) => {
                    item_iva = (item.importe * this.model.cliente_selected.iva) / 100;
                    result += item_iva;
                });
                this.model.iva = result;
                return this.model.iva;
            },
            set(newVal) {
                this.model.iva = newVal;
            },
        },
        var_computed_total: {
            get() {
                var result = 0;
                result = this.var_computed_sub_total + this.var_computed_iva;
                this.model.total = result;
                return this.model.total;
            },
            set(newVal) {
                this.model.total;
            },
        },
    },
    async mounted() {
        await this.services.clienteServices.getlistclientes();
        this.services.monedaServices.getlistMonedas();
        this.services.tiempoDeEntregaServices.getlistTiempoDeEntrega();
        this.services.empleadoServices.getlistEmpleados();
        this.services.instrumentoServices.getlistInstrumentos();

    },
    methods: {
        ActualizarImporte(cantidad, pvp) {
            this.var_computed_importe_instrumento = cantidad * pvp;
        },
        AgregarPartida() {
            this.model.partidas.push(this.partida);
            this.partida = {
                identificacion: "",
                instrumento: {},
                cantidad: 0,
                marca: "",
                modelo: "",
                serie: "",
                importe: 0,
                servicio: {},
                unidad: {},
            };
        },
        async addCotizacion() {
            if (this.$refs.f_mag.validate()) {
                await this.services.cotizacionServices.agregarCotizacion(this.model);
                await this.services.cotizacionServices.getlistCotizaciones();
                this.model = {
                    cliente_selected: {},
                    moneda_selected: {},
                    tde_selected: {},
                    empleado_selected: {},
                    tipo_de_servicio_selected: {},
                    estado_cotizacion_selected: {},
                    contacto: "",
                    telefono: "",
                    correo: "",
                    condiciones: "",
                    nota_cotizacion: "",
                    nota_seguimiento: "",
                };
            }
        },
        eliminarPartida(item) {
            var index = this.model.partidas.findIndex(
                (item) => item.identificacion === item.identificacion
            );
            this.model.partidas.splice(index, 1);
        },
    },
};
</script>
