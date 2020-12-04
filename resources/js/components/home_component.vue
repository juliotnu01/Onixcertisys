<template>
  <v-app>
    <v-row>
      <!-- cart headers -->
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total Orden de Servicio por Facturar</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{
                    var_computed_orden_de_servicio_por_facturar
                      | numberFormat("MXN")
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total Orden de Servicio Facturado</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{
                    var_computed_orden_de_servicio_facturado
                      | numberFormat("MXN")
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas sin Asignadas</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{
                    var_computed_partidas_sin_asignadas | numberFormat("MXN")
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{ var_computed_partidas_asignadas | numberFormat("MXN") }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas en Calibracion</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{
                    var_computed_partidas_asignadas_en_proceso
                      | numberFormat("MXN")
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card
          class="mx-auto"
          max-width="400"
          min-height="200"
          max-height="200"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas en Calibracion Terminada</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>
                  {{
                    var_computed_partidas_asignadas_en_calibracion_terminada
                      | numberFormat("MXN")
                  }}
                </h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card class="mt-4" width="100%">
          <apexcharts
            width="100%"
            height="300px"
            type="line"
            :options="opcionesCotizacion"
            :series="opcionesCotizacion.series"
            ref="chart1"
          />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card class="mt-4" width="100%">
          <apexcharts
            width="100%"
            height="300px"
            type="line"
            :options="opcionesFactura"
            :series="opcionesFactura.series"
          />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-data-table
              :headers="headers_cotizaciones"
              :items="cotizaciones"
              :items-per-page="5"
              class="elevation-3"
            >
              <template v-slot:item.id="{ item }">
                <td>
                  <v-btn color="primary" text @click="AbrirCotizacion(item)"
                    >{{item.id}}</v-btn
                  >
                </td>
              </template>
            </v-data-table>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" lg="6">
            <v-data-table
              :headers="headers_recibos"
              :items="recibos"
              :items-per-page="5"
              class="elevation-3"
            ></v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  <modal-edit-cotizacion/>
  <notificacion/>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
import modalEditCotizacion from '../components/cotizaciones/modals/modalEditCotizacionComponent.vue'
import notificacionComponent from './notificacion/indexComponentNotificacion.vue'
export default {
  components: {
    apexcharts: VueApexCharts,
    'modal-edit-cotizacion': modalEditCotizacion,
    'notificacion': notificacionComponent,
  },
  data() {
    return {
      opcionesCotizacion: {},
      opcionesFactura: {},
      headers_cotizaciones: [
        { text: "Ultimas Cotizacaciones", align: "left", value: "id" },
      ],
      headers_recibos: [
        { text: "Ultimas Ordenes de servicio", align: "left", value: "id" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "recibos",
      "partidas",
      "facturas_estadistica",
      "cotizaciones_estadisticas",
      "cotizaciones",
      "recibos",
    ]),
    var_computed_orden_de_servicio_por_facturar: {
      get() {
        var result = 0;
        if (Object.entries(this.recibos).length > 0) {
          for (var i = 0; this.recibos.length > i; i++) {
            if (this.recibos[i].estado == "pendiente") {
              result += this.recibos[i].total;
            }
          }
        }
        return result;
      },
      set(val) {
        this.Recibos = val;
      },
    },
    var_computed_orden_de_servicio_facturado: {
      get() {
        var result = 0;
        if (Object.entries(this.recibos).length > 0) {
          for (var i = 0; this.recibos.length > i; i++) {
            if (this.recibos[i].estado == "facturado") {
              result += this.recibos[i].total;
            }
          }
        }
        return result;
      },
      set(val) {
        this.Recibos = val;
      },
    },
    var_computed_partidas_asignadas: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas).length > 0) {
          for (var i = 0; this.partidas.length > i; i++) {
            if (this.partidas[i].has_tecnico !== null) {
              result += this.partidas[i].importe;
            }
          }
        }
        return result;
      },
      set(val) {
        this.partidas = val;
      },
    },
    var_computed_partidas_sin_asignadas: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas).length > 0) {
          for (var i = 0; this.partidas.length > i; i++) {
            if (this.partidas[i].has_tecnico == null) {
              result += this.partidas[i].importe;
            }
          }
        }
        return result;
      },
      set(val) {
        this.partidas = val;
      },
    },
    var_computed_partidas_asignadas_en_proceso: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas).length > 0) {
          for (var i = 0; this.partidas.length > i; i++) {
            if (this.partidas[i].has_tecnico !== null) {
              if (
                this.partidas[i].has_calibracion !== null &&
                this.partidas[i].has_calibracion.estado == "en proceso"
              ) {
                result += this.partidas[i].importe;
              }
            }
          }
        }
        return result;
      },
      set(val) {
        this.partidas = val;
      },
    },
    var_computed_partidas_asignadas_en_calibracion_terminada: {
      get() {
        var result = 0;
        if (Object.entries(this.partidas).length > 0) {
          for (var i = 0; this.partidas.length > i; i++) {
            if (this.partidas[i].has_tecnico !== null) {
              if (
                this.partidas[i].has_calibracion !== null &&
                this.partidas[i].has_calibracion.estado == "terminada"
              ) {
                result += this.partidas[i].importe;
              }
            }
          }
        }
        return result;
      },
      set(val) {
        this.partidas = val;
      },
    },
  },
  async mounted() {
    await this.services.reciboServices.getlistRecibos();
    await this.services.partidaServices.getlistpartidas();
    await this.services.cotizacionServices.getlistCotizacionesParaEstadistica();
    await this.services.facturaServices.getlistFacturasEstadistica();
    this.cargarChart();
    await this.services.cotizacionServices.getlistCotizaciones();
    await this.services.reciboServices.getlistRecibos();
  },
  methods: {
    cargarChart() {
      var dataCotizacion = {
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Cotizaciones Generadas",
            align: "left",
          },
          xaxis: {
            categories: [],
          },
          series: [
            {
              name: "Cotizaciones",
              data: [],
            },
          ],
        },
        datafactura = {
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Facturas Generadas",
            align: "left",
          },
          xaxis: {
            categories: [],
          },
          series: [
            {
              name: "Facturas",
              data: [],
            },
          ],
          grid: {
            borderColor: "#cecece",
          },
        };
      for (let [key, value] of Object.entries(this.cotizaciones_estadisticas)) {
        for (var i = 0; value.length > i; i++) {
          dataCotizacion.xaxis.categories.push(key);
          var total = 0;
          total += value[i].total;
        }
        dataCotizacion.series[0].data.push(total);
      }
      this.opcionesCotizacion = dataCotizacion;

      for (let [key2, value2] of Object.entries(this.facturas_estadistica)) {
        for (var i = 0; value2.length > i; i++) {
          datafactura.xaxis.categories.push(key2);
          var total = 0;
          total += value2[i].total;
        }
        datafactura.series[0].data.push(total);
      }
      this.opcionesFactura = datafactura;
    },
    AbrirCotizacion(item) {
      this.$store.commit("setDialogEditCotizacion", true);
      this.$store.commit("setCotizacion", item);
    },
  },
};
</script>
