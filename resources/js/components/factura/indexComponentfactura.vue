<template>
  <v-app>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <v-select
              :items="tipo_de_factura"
              v-model="tipoFacturaSelected"
              label="Seleccionar el tipo de factura"
              item-text="name"
              return-object
              outlined
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" v-if="tipoFacturaSelected.value == 1">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-autocomplete
                  :items="clientes"
                  v-model="ClienteSelected"
                  item-text="razon_social"
                  @change="ClienteSeleccionado(ClienteSelected)"
                  return-object
                  label="Clientes"
                  outlined
                  clearable
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-autocomplete
                  v-model="model.recibo"
                  :items="recibos_cliente"
                  outlined
                  chips
                  label="Ordenes de Sercicios"
                  item-text="id"
                  item-value="id"
                  multiple
                  return-object
                  @change="CargarPartidas"
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click="data.select"
                      @click:close="remove(data.item)"
                    >
                      Orden de servicio: {{ data.item.id }} -
                      {{ data.item.has_cotizaicon.has_cliente.razon_social }}
                      <v-alert
                        color="primary"
                        v-if="data.item.estado === 'pendiente'"
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                      <v-alert
                        color="success"
                        v-else
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                      Orden de servicio: {{ data.item.id }} -
                      {{ data.item.has_cotizaicon.has_cliente.razon_social }}
                      <v-alert
                        color="primary"
                        v-if="data.item.estado === 'pendiente'"
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                      <v-alert
                        color="success"
                        v-else
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                    </template>
                    <template v-else>
                      Orden de servicio: {{ data.item.id }} -
                      {{ data.item.has_cotizaicon.has_cliente.razon_social }}
                      <v-alert
                        color="primary"
                        v-if="data.item.estado === 'pendiente'"
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                      <v-alert
                        color="success"
                        v-else
                        dark
                        :value="true"
                        class="ml-4"
                        dense
                        small
                        style="
                          position: relative;
                          top: 8px;
                          height: 23px;
                          padding-top: 0px;
                        "
                      >
                        {{ data.item.estado }}
                      </v-alert>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                sm="12"
                md="12"
                lg="12"
                v-if="Object.entries(cotizacion_partida).length > 3"
              >
                <v-text-field
                  label="Cliente"
                  v-model="cotizacion_partida.has_cliente.razon_social"
                  outlined
                  disabled
                />
              </v-col>
              <v-col
                cols="12"
                xs="12"
                sm="12"
                md="4"
                lg="4"
                v-if="Object.entries(cotizacion_partida).length > 3"
              >
                <v-text-field
                  label="Moneda"
                  v-model="cotizacion_partida.has_moneda.clave"
                  outlined
                  disabled
                />
              </v-col>
              <!--
                        <v-col cols="12" xs="12" sm="4" md="4">
                            <pre>{{cotizacion_partida.has_cliente.has_metodo_de_pago}}</pre>
                            <v-text-field label="Forma de pago" v-model="cotizacion_partida.has_cliente.has_condicion_de_pago.nombre" outlined disabled />
                        </v-col>
                            -->
              <!--
                        <v-col cols="12" xs="12" sm="4" md="4">
                            <v-text-field label="Metodo de pago" v-model="cotizacion_partida" outlined disabled />
                        </v-col>
                            -->
              <v-spacer />
              <v-col
                cols="12"
                xs="12"
                sm="6"
                md="6"
                v-if="Object.entries(cotizacion_partida).length > 3"
              >
                <v-textarea
                  outlined
                  label="NOTA"
                  v-model="cotizacion_partida.nota_de_factura"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="12">
                <v-btn color="success" @click="TotalizarFactura">Totalizar</v-btn>
                <v-btn color="success" @click="dialogAddProducto = true"
                  >Agregar items</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <!--<v-col cols="12" xs="12" sm="12" md="12" v-if="tipoFacturaSelected.value == 2">
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
                </v-col>-->
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-data-table
          :headers="headers_partidas_factura"
          :items="partidas_acumuladas"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.has_intrumento="{ item }">
            <td class="text-left">
              {{ item.has_intrumento.nombre }}<br />
              ID:{{ item.identificacion }}<br />
              Marca:{{ item.marca }}<br />
              Modelo:{{ item.modelo }}<br />
              Serie:{{ item.serie }}<br />
            </td>
          </template>
          <template v-slot:item.servicio="{ item }">
            <td class="text-left">Servicio de {{ item.servicio }}</td>
          </template>
          <template v-slot:item.has_intrumento.precio_venta="{ item }">
            <td clas="text-left">
              <!-- <div v-show="item.has_intrumento.editPrecioVenta" >
                            {{item.has_intrumento.precio_venta | numberFormat(Object.entries(cotizacion_partida).length > 3 ? cotizacion_partida.has_moneda.clave: '' )}}
                        </div> -->
              <v-text-field
                label="precio venta"
                v-model="item.has_intrumento.precio_venta"
                small
                dense
                outlined
                @change="ActualizarImporte(item)"
              ></v-text-field>
              <!-- <v-btn color="warning" v-show="!item.has_intrumento.editPrecioVenta" icon dense small  @click="item.has_intrumento.editPrecioVenta = true"><v-icon >mdi-pencil</v-icon></v-btn> -->
              <!-- <v-btn color="success"  v-show="item.has_intrumento.editPrecioVenta"  icon dense small  @click="item.has_intrumento.editPrecioVenta = false"><v-icon >mdi-check</v-icon></v-btn> -->
            </td>
          </template>
          <template v-slot:item.importe="{ item }">
            <td clas="text-left">
              {{
                item.importe
                  | numberFormat(
                    Object.entries(cotizacion_partida).length > 3
                      ? cotizacion_partida.has_moneda.clave
                      : ""
                  )
              }}
            </td>
          </template>
          <template v-slot:item.has_calibracion="{ item }">
            <td clas="text-left">
              <v-alert
                dense
                outlined
                type="error"
                v-if="!item.has_calibracion"
                class="m-0 p-0"
              >
                por iniciar
              </v-alert>
              <v-alert
                dense
                outlined
                type="warning"
                v-else-if="item.has_calibracion.estado === 'en proceso'"
                class="m-0 p-0"
              >
                {{ item.has_calibracion.estado }}
              </v-alert>
              <v-alert dense outlined type="success" v-else class="m-0 p-0">
                {{ item.has_calibracion.estado }}
              </v-alert>
            </td>
          </template>
          <template v-slot:footer>
            <v-container>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                  <h3 class="float-right">
                    SUBTOTAL:
                    {{
                      var_computed_subtotal
                        | numberFormat(
                          Object.entries(cotizacion_partida).length > 3
                            ? cotizacion_partida.has_moneda.clave
                            : ""
                        )
                    }}
                  </h3>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                  <h3 class="float-right">
                    IVA :
                    {{
                      var_computed_iva
                        | numberFormat(
                          Object.entries(cotizacion_partida).length > 3
                            ? cotizacion_partida.has_moneda.clave
                            : ""
                        )
                    }}
                  </h3>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="m-0 p-0">
                  <h3 class="float-right">
                    TOTAL:
                    {{
                      var_computed_total
                        | numberFormat(
                          Object.entries(cotizacion_partida).length > 3
                            ? cotizacion_partida.has_moneda.clave
                            : ""
                        )
                    }}
                  </h3>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <modal-add-factura />
    <modal-pdf-factura />
    <notificacion />
    <v-dialog v-model="dialogAddProducto">
      <v-card>
        <v-row         <v-col>
            <v-text-fields laberl="producto" />
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalADDFactura from "./modals/modalTotalizarComponent.vue";
import modalPdfFactura from "./modals/modalPdfFacturaComponent";
import notificacionComponent from "../notificacion/indexComponentNotificacion";
export default {
  components: {
    "modal-add-factura": modalADDFactura,
    "modal-pdf-factura": modalPdfFactura,
    notificacion: notificacionComponent,
  },
  data() {
    return {
      dialogAddProducto: false,
      model: {
        recibo: [],
        factura_nueva: {
          cliente: {},
          moneda: {},
          vendedor: {},
          forma_de_pago: "",
          metodo_de_pago: "",
          nota_de_factura: "",
        },
      },
      instrumentoSelected: {
        cantidad: 1,
        concepto: {
          name: "Calibracion",
          value: 1,
        },
        instrumento: {},
        importe: "",
        marca: "",
        modelo: "",
        serie: "",
      },
      tipo_de_factura: [
        {
          name: "Generar factura de las orde de servicio ",
          value: 1,
        },
        // {
        //     name: 'Generar factura en blanco',
        //     value: 2
        // },
      ],
      tipoFacturaSelected: {},
      headers_partidas_factura: [
        {
          text: "Orden de Servicio",
          sorable: false,
          align: "center",
          value: "reciboID",
        },
        {
          text: "Cotizacion",
          sorable: false,
          align: "center",
          value: "cotizacionID",
        },
        {
          text: "ID",
          sorable: false,
          align: "center",
          value: "informe_id",
        },
        {
          text: "Concepto",
          sorable: false,
          align: "center",
          value: "servicio",
        },
        {
          text: "Instrumento",
          sorable: false,
          align: "center",
          value: "has_intrumento",
        },
        {
          text: "Estado de la calibracion",
          sorable: false,
          align: "center",
          value: "has_calibracion",
        },
        {
          text: "Precio unitario",
          sorable: false,
          align: "center",
          value: "has_intrumento.precio_venta",
        },
        {
          text: "Importe",
          sorable: false,
          align: "center",
          value: "importe",
        },
        // {
        //     text: 'Accion',
        //     sorable: false,
        //     align: 'center',
        //     value: 'accion'
        // },
      ],
      tipo_de_servicio: [
        {
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
      ClienteSelected: {},
      partidas_acumuladas: [],
      cotizacion_partida: {},
      editPrecioVenta: false,
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "recibos",
      "clientes",
      "monedas",
      "empleados",
      "instrumentos",
      "clientes",
      "recibos_cliente",
    ]),
    var_computed_subtotal: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas_acumuladas).length > 0) {
          for (var i = 0; this.partidas_acumuladas.length > i; i++) {
            result +=
              this.partidas_acumuladas[i].cantidad *
              this.partidas_acumuladas[i].has_intrumento.precio_venta;
          }
        }
        return result;
      },
      set(val) {
        this.partidas_acumuladas = val;
      },
    },
    var_computed_iva: {
      get() {
        var result = 0;
        if (Object.entries(this.cotizacion_partida).length > 3) {
          result =
            (this.var_computed_subtotal * this.cotizacion_partida.has_cliente.iva) / 100;

          return result;
        }
      },
      set(val) {
        this.partidas_acumuladas = val;
      },
    },
    var_computed_total: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas_acumuladas.length > 0)) {
          result = this.var_computed_subtotal + this.var_computed_iva;

          return result;
        }
      },
      set(val) {
        this.partidas_acumuladas = val;
      },
    },
  },
  async mounted() {
    await this.services.reciboServices.getlistRecibos();
    await this.services.clienteServices.getlistclientes();
    await this.services.monedaServices.getlistMonedas();
    await this.services.empleadoServices.getlistEmpleados();
    await this.services.instrumentoServices.getlistInstrumentos();
    await this.services.clienteServices.getlistclientes();
  },
  methods: {
    async addPartida() {
      try {
        var model = {
          has_intrumento: this.instrumentoSelected.instrumento,
          importe:
            this.instrumentoSelected.cantidad *
            this.instrumentoSelected.instrumento.precio_venta,
          marca: this.instrumentoSelected.marca,
          modelo: this.instrumentoSelected.modelo,
          serie: this.instrumentoSelected.serie,
          id: this.partidas_acumuladas[this.partidas_acumuladas.length - 1].id + 1,
        };
        this.partidas_acumuladas.push(model);
        this.instrumentoSelected = {
          cantidad: 1,
          concepto: {
            name: "Calibracion",
            value: 1,
          },
          instrumento: {},
        };
      } catch (e) {
        console.log(e);
      }
    },
    EliminarPartida(item) {
      var index = this.partidas_acumuladas.indexOf(item);
      this.partidas_acumuladas.splice(index, 1);
    },
    async ClienteSeleccionado(cli) {
      try {
        this.model.recibo = [];
        this.partidas_acumuladas = [];
        this.cotizacion_partida = {};
        await this.services.reciboServices.getlistRecibosClientes(cli);
      } catch (e) {}
    },
    remove(item) {
      const index = this.model.recibo.indexOf(item);
      if (index >= 0) this.model.recibo.splice(index, 1);
      for (var j = 0; j < item.has_partidas.length; j++) {
        var indexP = this.partidas_acumuladas.indexOf(item.has_partidas[j]);
        this.partidas_acumuladas.splice(indexP, 1);
      }
    },
    CargarPartidas(p) {
      this.model.recibo.forEach((item) => {
        this.cotizacion_partida = item.has_cotizaicon;
      });
      for (var i = 0; i < this.model.recibo.length; i++) {
        for (var j = 0; j < this.model.recibo[i].has_partidas.length; j++) {
          if (!this.partidas_acumuladas.includes(this.model.recibo[i].has_partidas[j])) {
            this.partidas_acumuladas.push(this.model.recibo[i].has_partidas[j]);
            console.log({ p: this.model.recibo[i].has_partidas[j] });
            for (var a of this.partidas_acumuladas) {
              if (a.id === this.model.recibo[i].has_partidas[j].id) {
                a.cotizacionID = this.model.recibo[i].has_cotizaicon.id;
                a.reciboID = this.model.recibo[i].id;
              }
            }
          }
        }
      }
    },
    async TotalizarFactura() {
      var dataFactura = {
        partidas: this.partidas_acumuladas,
        cliente: this.cotizacion_partida,
        subtotal: this.var_computed_subtotal,
        iva: this.var_computed_iva,
        total: this.var_computed_total,
        nota: this.cotizacion_partida.nota_de_factura,
      };
      this.$store.commit("setDialogFactura", dataFactura);
      this.$store.commit("setDialogAddFactura", true);
    },
    ActualizarImporte(item) {
      item.importe = item.has_intrumento.precio_venta;
      this.services.instrumentoServices.actualizarInstrumento(item.has_intrumento);
      this.services.partidaServices.actualizarPartida(item);
    },
  },
};
</script>
