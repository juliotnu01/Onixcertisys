<template>
  <v-app>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              v-model="cliente_selected"
              :items="clientes"
              outlined
              label="Seleccionar cliente"
              item-text="datos_fisicos_requeremientos_facturacion_razon_social"
              item-value="id"
              return-object
              @change="cargarchart"
            />
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-data-table
                      :headers="headers_cotizacion"
                      :items="cliente_selected.has_cotizaciones"
                      :items-per-page="5"
                      class="elevation-1"
                    >
                      <template v-slot:item.accion="{ item }">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="primary"
                              dark
                              v-bind="attrs"
                              v-on="on"
                              icon
                              fab
                              @click="EnlazarCotizacion(item)"
                            >
                              <v-icon dark v-bind="attrs" v-on="on"
                                >mdi-content-duplicate
                              </v-icon>
                            </v-btn>
                          </template>
                          <span>Enlazar cotizacion</span>
                        </v-tooltip>
                      </template>
                      <template v-slot:item.created_at="{ item }">
                        <td>
                          {{ item.created_at.substr(0, 10) }}
                        </td>
                      </template>
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="6">
        <apexcharts
          width="100%"
          type="line"
          :options="options"
          :series="series"
        ></apexcharts>
      </v-col> -->
    </v-row>
    <modal-para-duplicar />
    <notificacion />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalParaDuplicar from "./modals/modalDuplicateCotizacionComponent.vue";
import notificacionComponent from "../notificacion/indexComponentNotificacion.vue";
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    "modal-para-duplicar": modalParaDuplicar,
    notificacion: notificacionComponent,
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      cliente_selected: {},
      headers_cotizacion: [
        {
          text: "Cotizacion",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Fecha de creacion",
          align: "start",
          sortable: false,
          value: "created_at",
        },
        {
          text: "Accion",
          align: "center",
          sortable: false,
          value: "accion",
        },
      ],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["services", "clientes"]),
  },
  mounted() {
    this.services.clienteServices.getlistclientes();
  },
  methods: {
    EnlazarCotizacion(item) {
      this.$store.commit("setCotizacionParaDuplicar", item);
      this.$store.commit("setDialogDuplicateCotizacion", true);
    },
    cargarchart() {
      for (let [key, value] of Object.entries(this.cliente_selected.has_cotizaciones)) {
        for (var i = 0; value.length > i; i++) {
          this.options.xaxis.categories.push(key);
          var total = 0;
          total += value[i].total;
        this.series[0].data.push(key);
        }
      }
      // this.opcionesCotizacion = dataCotizacion;

    },
  },
};
</script>
