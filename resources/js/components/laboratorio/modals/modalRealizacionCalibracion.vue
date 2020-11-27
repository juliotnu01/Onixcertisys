<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="openDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Error Ascendente</th>
                      <th class="text-left">Error Descendente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <v-textarea
                          v-model="var_err_ascendente"
                        />
                      </td>
                      <td>
                         <v-textarea
                          v-model="var_err_descendente"
                        />
                      </td>
                      <td>
                        <v-textarea
                          v-model="var_xaxis_chart"
                          @change="formatXaxis"
                        />
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col cols="12">
              <apexcharts
                width="100%"
                height="300px"
                type="line"
                :options="opcionesGraficaDesviacion"
                :series="opcionesGraficaDesviacion.series"
                ref="chart1"
            /></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      var_err_ascendente: 0,
      var_err_descendente: 0,
      opcionesGraficaDesviacion: {},
      var_xaxis_chart: "",
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_realizacion_calibracion"]),
    openDialog: {
      get() {
        return this.dialog_realizacion_calibracion;
      },
      set(val) {
        this.$store.commit("setDialogRealizacionCalibracion", val);
      },
    },
  },
  methods: {
    formatXaxis() {
      var OpcionDesviacion = {
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Grafica de Desviacion",
          align: "left",
        },
        xaxis: {
          categories: [],
        },
        series: [
          {
            name: "Ascendente",
            data: [],
          },
          {
            name: "Descendente",
            data: [],
          },
        ],
      };
      OpcionDesviacion.xaxis.categories = this.var_xaxis_chart
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((val, index) => {
          return parseFloat(val.replace(",", ".")).toFixed(3);
        });
        OpcionDesviacion.series[0].data = this.var_err_ascendente
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((val, index) => {
          return parseFloat(val.replace(",", ".")).toFixed(3);
        });
        OpcionDesviacion.series[1].data = this.var_err_descendente
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((val, index) => {
          return parseFloat(val.replace(",", ".")).toFixed(3);
        });
      this.opcionesGraficaDesviacion = OpcionDesviacion;
    },
  },
};
</script>
