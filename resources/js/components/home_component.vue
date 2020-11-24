<template>
  <v-app>
    <v-row>
      <!-- cart headers -->
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total Orden de Servicio por Facturar</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                 <h3>{{ var_computed_orden_de_servicio_por_facturar | numberFormat('MXN') }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total Orden de Servicio Facturado</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                 <h3>{{ var_computed_orden_de_servicio_facturado | numberFormat('MXN') }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas sin Asignadas</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                 <h3>{{ var_computed_partidas_sin_asignadas | numberFormat('MXN') }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                 <h3>{{ var_computed_partidas_asignadas | numberFormat('MXN') }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas en Calibracion</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                 <h3>{{ var_computed_partidas_asignadas_en_proceso | numberFormat('MXN') }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <h4>Total en Partidas Asignadas en Calibracion Terminada</h4>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col class="display-1" cols="12">
                <h3>{{
                  var_computed_partidas_asignadas_en_calibracion_terminada
                     | numberFormat('MXN')
                }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mt-4" width="100%">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              Grafica de cotizacion y facturación
            </div>
            <v-divider class="my-2"></v-divider>
            <v-row>
              <v-col cols="12" md="3">
                <v-card max-width="344" color="orange" dark>
                  <v-card-text>
                    <h4>Pendientes 2020</h4>
                    <p class="display-1 text--primary">$99.999.99,99</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card max-width="344" color="green" dark>
                  <v-card-text>
                    <h4>Vendidas 2020</h4>
                    <p class="display-1 text--primary">$99.999.99,99</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card max-width="344" color="red" dark>
                  <v-card-text>
                    <h4>Canceladas 2020</h4>
                    <p class="display-1 text--primary">$99.999.99,99</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card max-width="344" color="blue" dark>
                  <v-card-text>
                    <h4>Clientes 2020</h4>
                    <p class="display-1 text--primary">9999</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-3"
            ></v-data-table>
          </v-col>
          <v-col cols="12" md="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-3"
            ></v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      head_menu: [
        { text: "Total en Orden de Servicio sin facturar" },
        { text: "Total en Recepción" },
        { text: "Total en Asignación" },
        { text: "Total en calibración" },
        { text: "Total  Calibrados" },
        { text: "Total  Cancelados" },
      ],
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      headers: [
        {
          text: "Ultimas Cotizaciones Pendientes",
          align: "start",
          sortable: false,
          value: "name",
        },
      ],
      desserts: [],
    };
  },
  computed: {
    ...mapGetters(["services", "recibos", "partidas"]),
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
  },
};
</script>
