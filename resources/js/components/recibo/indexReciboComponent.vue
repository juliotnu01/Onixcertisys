<template>
  <v-app class="fill-heigth">
    <v-row>
      <v-col cols="12" xs="!2" sm="12" md="12" lg="12">
        <v-container fluid>
          <v-data-iterator
            :items="recibos"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar dark color="blue darken-3" class="mb-1">
                <v-text-field
                  v-model="search"
                  clearable
                  text
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-search"
                  label="Buscar recibo"
                ></v-text-field>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  icon
                  @click.prevent="services.reciboServices.getlistRecibos()"
                >
                  <v-icon dark> mdi-reload </v-icon>
                </v-btn>
              </v-toolbar>
            </template>

            <template v-slot:default="props">
              <v-row justify="space-around" align="center">
                <v-col
                  v-for="item in props.items"
                  :key="item.id"
                  cols="12"
                  sm="6"
                  md="5"
                  lg="5"
                >
                  <v-card>
                    <v-card-title>
                      <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <div class="text-right text-caption">
                            Fecha creación:
                            {{ item.created_at.substr(0, 10) }}
                          </div>
                          <div>
                            Recibo id:
                            {{ item.id }}
                          </div>
                          <div>
                            Cotización id:
                            {{ item.cotizacion_id }}
                          </div>
                          <div>Estado: {{ item.estado }}</div>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <strong>Cliente: </strong>
                          {{ item.has_cotizaicon.has_cliente.razon_social }}
                          <v-btn icon @click="show = !show">
                            <v-icon>{{
                              show ? "mdi-chevron-up" : "mdi-chevron-down"
                            }}</v-icon>
                          </v-btn>
                          <v-expand-transition>
                            <div v-show="show">
                              <v-card-text>
                                <small>
                                  <strong>Dirección Fiscal: </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente
                                      .direccion_fiscal
                                  }} </small
                                ><br />
                                <small>
                                  <strong>Teléfono: </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente.telefono
                                  }} </small
                                ><br />
                                <small>
                                  <strong
                                    >Correo electronico para la factura:
                                  </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente
                                      .correo_electronico_factura
                                  }} </small
                                ><br />
                                <small>
                                  <strong>Nombre encargado: </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente
                                      .nombre_completo
                                  }} </small
                                ><br />
                                <small>
                                  <strong>Celular encargado: </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente
                                      .celular_contacto
                                  }} </small
                                ><br />
                                <small>
                                  <strong>Correo encargado: </strong>
                                  {{
                                    item.has_cotizaicon.has_cliente
                                      .correo_contacto
                                  }} </small
                                ><br />
                              </v-card-text>
                            </div>
                          </v-expand-transition>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <v-row>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                              <v-autocomplete
                                v-model="item.userSelected"
                                :items="empleados"
                                outlined
                                dense
                                item-text="nombre_completo"
                                return-object
                                label="Seleccionar empleado"
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                              <v-btn
                                text
                                depressed
                                color="primary"
                                @click="
                                  imprimirReciboUser(item, item.userSelected)
                                "
                              >
                                <v-icon>mdi-printer</v-icon>
                              </v-btn>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                              <v-btn
                                text
                                depressed
                                color="primary"
                                @click="imprimirRecibo(item)"
                                >Imprimir recibo</v-btn
                              >
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-simple-table dense>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-center">Partida</th>
                            <th class="text-center">Identificación</th>
                            <th class="text-center">Servicio</th>
                            <th class="text-center">Tipo</th>
                            <th class="text-center">Asignar</th>
                            <th class="text-center">Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in item.has_partidas"
                            :key="item.name"
                          >
                            <td class="text-center">{{ item.id }}</td>
                            <td class="text-center">
                              {{ item.identificacion }}
                            </td>
                            <td class="text-center">
                              <v-alert
                                color="primary"
                                dark
                                dense
                                small
                                class="mt-5"
                              >
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
                  </v-card>
                </v-col>
              </v-row>
            </template>
            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-col>
    </v-row>
    <modal-asignar-tecnico />
    <modal-pdf />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalAsignarTecnico from "./modals/modalAsignarTecnicoComponent";
import modalViewPdfComponent from "./modals/modalViewPdfComponent";
export default {
  components: {
    "modal-asignar-tecnico": modalAsignarTecnico,
    "modal-pdf": modalViewPdfComponent,
  },
  data() {
    return {
      userPrintSelected: {},
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      page: 1,
      itemsPerPage: 6,
      show: false,
      sortBy: '',
    };
  },
  computed: {
    ...mapGetters(["services", "recibos", "empleados"]),
    numberOfPages() {
      return Math.ceil(this.recibos.length / this.itemsPerPage);
    },
  },
  async mounted() {
    await this.services.reciboServices.getlistRecibos();
    await this.services.empleadoServices.getlistEmpleados();
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    AsignarTecnico(item) {
      this.$store.commit("setPartidaTecnico", item);
      this.$store.commit("setDialogAsignarTecnico", true);
    },
    imprimirRecibo(item) {
      console.log({ item });
      this.services.reciboServices.imprimirRecibo(item);
    },
    imprimirReciboUser(item, user) {
      this.services.reciboServices.imprimirReciboUser(item, user);
    },
  },
};
</script>
