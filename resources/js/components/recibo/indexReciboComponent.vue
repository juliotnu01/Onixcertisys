<template>
  <v-app>
    <v-card>
      <v-card-title class="indigo white--text headline">
        <v-text-field
          v-model="search"
          label="Search Company Directory"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col cols="6" v-if="Object.entries(this.recibos).length > 0">
          <v-treeview
            :active.sync="active"
            :search="search"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            color="warning"
            open-on-click
            transition
          >
          </v-treeview>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center"
            >
              Seleccionar Orden de servicio
            </div>
            <v-card v-else :key="selected.id" class="pt-6">
              <v-card-text>
                <h6 class="headline mb-2">
                  <strong>Cliente: </strong>
                  {{ selected.has_cotizaicon.has_cliente.razon_social }} <br />
                </h6>
              </v-card-text>
              <v-divider></v-divider>
              <v-row class="text-left" tag="v-card-text">
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">Partida</th>
                          <th class="text-center">Identificación</th>
                          <th class="text-center">Servicio</th>
                          <th class="text-center">Tipo</th>
                          <th class="text-center">Estado de la Calibracion</th>
                          <th class="text-center">Asignar</th>
                          <th class="text-center">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in selected.has_partidas" :key="item.name">
                          <td class="text-center">{{ item.id }}</td>
                          <td class="text-center">
                            {{ item.identificacion }}
                          </td>
                          <td class="text-center">
                            <v-alert color="primary" dark dense small class="mt-5">
                              {{ item.servicio }}
                            </v-alert>
                          </td>
                          <td class="text-center">
                            <v-alert
                              color="primary"
                              dark
                              dense
                              small
                              outlined
                              class="mt-5"
                            >
                              {{ item.tipo }}
                            </v-alert>
                          </td>
                          <td class="text-center">
                            <v-alert
                              dense
                              outlined
                              type="error"
                              v-if="item.has_calibracion == null"
                              class="mt-5"
                            >
                              por inicar
                            </v-alert>
                            <v-alert
                              dense
                              outlined
                              type="warning"
                              v-else-if="item.has_calibracion.estado === 'en proceso'"
                              class="mt-5"
                            >
                              {{ item.has_calibracion.estado }}
                            </v-alert>
                            <v-alert dense outlined type="success" v-else class="mt-5">
                              {{ item.has_calibracion.estado }}
                            </v-alert>
                          </td>
                          <td class="text-center">
                            <div v-if="item.has_empleado">
                              {{ item.has_empleado.nombre_completo }}
                            </div>
                            <div v-else>
                              <v-alert
                                color="error"
                                dark
                                dense
                                small
                                class="mt-5"
                                style="font-size: 12px"
                              >
                                Sin Asignar
                              </v-alert>
                            </div>
                          </td>
                          <td class="text-center">
                            <v-btn
                              color="success"
                              icon
                              dense
                              small
                              @click="AsignarTecnico(item)"
                            >
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                      <v-autocomplete
                        v-model="magnitudSelected"
                        :items="magnitudes"
                        outlined
                        dense
                        item-text="nombre"
                        return-object
                        label="Seleccionar magnitud"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                      <v-btn
                        text
                        color="primary"
                        @click="imprimirReciboUser(selected, magnitudSelected)"
                      >
                        <v-icon>mdi-printer</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                      <v-btn block color="primary" @click="imprimirRecibo(selected)"
                        >Imprimir Orden de servicio</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
    <modal-asignar-tecnico />
    <modal-pdf />
    <notificacion />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalAsignarTecnico from "./modals/modalAsignarTecnicoComponent";
import modalViewPdfComponent from "./modals/modalViewPdfComponent";
import notificacionComponent from "../notificacion/indexComponentNotificacion";
export default {
  components: {
    "modal-asignar-tecnico": modalAsignarTecnico,
    "modal-pdf": modalViewPdfComponent,
    notificacion: notificacionComponent,
  },
  data() {
    return {
      userPrintSelected: {},
      active: [],
      avatar: null,
      open: [],
      users: [],
      search: null,
      magnitudSelected: {},
    };
  },
  computed: {
    ...mapGetters(["services", "recibos", "magnitudes"]),
    items() {
      return [
        {
          name: "Ordenes de servicios",
          children: this.users,
        },
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.recibos.find((recibo) => recibo.id === id);
    },
  },
  async mounted() {
    await this.services.reciboServices.getlistRecibos();
    await this.services.magnitudesServices.getListMagnitudes();
  },
  methods: {
    AsignarTecnico(item) {
      this.$store.commit("setPartidaTecnico", item);
      this.$store.commit("setDialogAsignarTecnico", true);
    },
    imprimirRecibo(item) {
      this.services.reciboServices.imprimirRecibo(item);
    },
    imprimirReciboUser(item, user) {
      this.services.reciboServices.imprimirReciboUser(item, user);
    },

    async fetchUsers(item) {
      return this.recibos.forEach((recibo) => {
        item.children.push({
          name: `Orden de servicio: ${recibo.id} - Cliente: ${
            recibo.has_cotizaicon.has_cliente.razon_social
          } - Fecha: ${recibo.created_at.substr(0, 10)}`,
          id: recibo.id,
        });
      });
    },
    async reload() {
      await this.services.reciboServices.getlistRecibos();
      this.fetchUsers(this.items[0]);
    },
  },
};
</script>
