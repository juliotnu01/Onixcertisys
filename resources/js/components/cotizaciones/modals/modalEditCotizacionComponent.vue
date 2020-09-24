<template>
<v-app>
    <v-dialog v-model="openDialog" max-width="1256" min-width="1256" persistent>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="openDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text dark tile @click="EditCotizacion">
                <v-icon>mdi-pencil</v-icon>Editar
            </v-btn>
        </v-toolbar>
        <v-card>
            <v-card-title>Editar Cotizacion</v-card-title>
            <v-card-text>
                <v-form ref="f_mag">

                    <v-row align="center" justify="space-around" v-if=" Object.entries(this.cotizacion).length > 0 ">
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="cotizacion.has_cliente" :items="clientes" item-text="razon_social" outlined s label="Seleccionar Cliente" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="cotizacion.has_moneda" :items="monedas" item-text="clave" outlined s label="Seleccionar Moneda" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="cotizacion.has_tiempo_de_entrega" :items="tiempos_de_entrega" item-text="nombre" outlined s label="Tiempo de Entrega" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-autocomplete offset-y dense v-model="cotizacion.has_empleado" :items="empleados" item-text="nombre_completo" outlined s label="Empleado" return-object></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-select offset-y dense v-model="cotizacion.tipo_de_servicio" :items="tipo_de_servicio" label="Tipo de Servicio" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-select offset-y dense v-model="cotizacion.estado_de_la_cotizacion" :items="estado_de_la_cotizacion" label="Estado de la cotizacion" outlined item-text="name" return-object></v-select>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="cotizacion.has_cliente.nombre_completo" dense outlined label="Contacto" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="cotizacion.has_cliente.celular_contacto" dense outlined label="Teléfono" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="cotizacion.has_cliente.correo_contacto" dense outlined label="Correo" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                            <v-text-field :rules="[rules.required]" v-model="cotizacion.condicion" dense outlined label="Condiciones" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-textarea v-model="cotizacion.nota_para_la_cotizacion" outlined label="Notas de la cotizacion"></v-textarea>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                            <v-textarea v-model="cotizacion.nota_de_seguimiento" outlined label="Notas de seguimiento"></v-textarea>
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
                            <v-text-field disabled v-model="partida.instrumento.precio_venta" outlined label="Precio Unitario" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-text-field disabled v-model="var_computed_importe_instrumento" outlined label="Importe" />
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                            <v-btn color="primary" block @click="AgregarPartida" dense small>
                                Agregar Partida
                                <v-icon small>mdi-plus</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
                <v-data-table dense :headers="headers_cotizacion" :items="cotizacion.has_partidas" item-key="name" class="elevation-1 mt-5">
                    <template v-slot:item.identificacion="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.identificacion}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-text-field v-model="item.identificacion" outlined label="Identicacion" dense small />
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.servicio="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.servicio}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-select dense small offset-y v-model="item.servicio" :items="servicio_partida" label="Servicio" outlined item-text="name" return-object></v-select>
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.unidad="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.unidad}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-select dense small offset-y v-model="item.unidad" :items="unidad_partida" label="Unidad" outlined item-text="name" return-object></v-select>
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.marca="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.marca}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-text-field v-model="item.marca" outlined label="Marca" small dense />
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.modelo="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.modelo}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-text-field v-model="item.modelo" outlined label="Modelo" small dense />
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.serie="{item}">
                        <td class="text-center">
                            <div v-show="!edit_caliente_partida">
                                {{item.serie}}
                            </div>
                            <div v-show="edit_caliente_partida">
                                <v-text-field v-model="item.serie" outlined label="Serie" small dense />
                            </div>
                        </td>
                    </template>
                    <template v-slot:item.accion="{item}">
                        <td>
                            <v-btn icon small color="error" @click="eliminarPartida(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn color="warning" icon @click="edit_caliente_partida = true" v-show="!edit_caliente_partida">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn color="warning" icon @click="edit_caliente_partida = false" v-show="edit_caliente_partida">
                                <v-icon color="success">mdi-check</v-icon>
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
            edit_caliente_partida: false,
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
                    value: "servicio",
                },
                {
                    text: "Unidad",
                    value: "unidad",
                },

                {
                    text: "Instrumento",
                    value: "has_intrumento.nombre",
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
                    value: "has_intrumento.alcance",
                },
                {
                    text: "Acreditacion",
                    value: "has_intrumento.has_acreditacion.nombre",
                },
                {
                    text: "Cantidad",
                    value: "cantidad",
                },
                {
                    text: "Precio Unitario",
                    value: "has_intrumento.precio_venta",
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
            "dialog_edit_cotizacion",
            "clientes",
            "monedas",
            "empleados",
            "tiempos_de_entrega",
            "instrumentos",
            "cotizacion",
        ]),
        openDialog: {
            get() {
                return this.dialog_edit_cotizacion;
            },
            set(val) {
                this.$store.commit("setDialogEditCotizacion", val);
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
                for (var i = 0; i < this.cotizacion.has_partidas.length; i++) {
                    result += this.cotizacion.has_partidas[i].importe;
                }
                this.cotizacion.sub_total = parseInt(result);
                return this.cotizacion.sub_total;
            },
            set(newVal) {
                this.cotizacion.sub_total = newVal;
            },
        },
        var_computed_iva: {
            get() {
                var result = 0,
                    item_iva = 0;

                this.cotizacion.has_partidas.forEach((item) => {
                    item_iva = (item.importe * this.cotizacion.has_cliente.iva) / 100;
                    result += item_iva;
                });
                this.cotizacion.iva = parseInt(result);
                return this.cotizacion.iva;
            },
            set(newVal) {
                this.cotizacion.iva = newVal;
            },
        },
        var_computed_total: {
            get() {
                var result = 0;
                result = this.var_computed_sub_total + this.var_computed_iva;
                this.cotizacion.total = parseInt(result);
                return this.cotizacion.total;
            },
            set(newVal) {
                this.cotizacion.total;
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
            var obj = {
                identificacion: this.partida.identificacion,
                has_intrumento: this.partida.instrumento,
                cantidad: this.partida.cantidad,
                marca: this.partida.marca,
                modelo: this.partida.modelo,
                serie: this.partida.serie,
                importe: this.partida.importe,
                marca: this.partida.marca,
                modelo: this.partida.modelo,
                serie: this.partida.serie,
                servicio: this.partida.servicio.name,
                unidad: this.partida.unidad.name,
            };
            this.cotizacion.has_partidas.push(obj);
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
        async EditCotizacion() {
            if (this.$refs.f_mag.validate()) {
                await this.services.cotizacionServices.actualizarCotizacion(
                    this.cotizacion
                );
                await this.services.cotizacionServices.getlistCotizaciones();
            }
        },
        eliminarPartida(item) {
            this.services.partidaServices.EliminarPartida(item);
            var index = this.cotizacion.has_partidas.findIndex(
                (item) =>
                item.id === item.id || item.identificacion === item.identificacion
            );
            this.cotizacion.has_partidas.splice(index, 1);
        },
    },
};
</script>
