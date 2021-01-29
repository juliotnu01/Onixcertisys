<template>
  <v-app class="fill-heigth">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-text-field
          label="Buscar Cotizacion"
          outlined
          v-model="search_cot"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-btn
          fab
          color="primary"
          class="float-right ml-5"
          @click="services.cotizacionServices.getlistCotizaciones()"
        >
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn
          fab
          color="primary"
          class="float-right"
          @click="$store.commit('setDialogAddCotizacion', true)"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      dense
      :headers="headers_cotizacion"
      :items="cotizaciones"
      item-key="name"
      class="elevation-1"
      :search="search_cot"
    >
      <template v-slot:item.created_at="{ item }">
        <td>
          {{ item.created_at.substr(0, 10) }}
        </td>
      </template>
      <template v-slot:item.estado_de_la_cotizacion="{ item }">
        <td>
          <v-alert
            class="mt-5"
            type="info"
            icon="mdi-clock"
            dense
            v-if="item.estado_de_la_cotizacion == 'pendiente'"
          >
            {{ item.estado_de_la_cotizacion }}
          </v-alert>
          <v-alert
            class="mt-5"
            color="purple"
            icon="mdi-receipt"
            dense
            v-if="item.estado_de_la_cotizacion == 'Orden de servicio'"
            dark
          >
            {{ item.estado_de_la_cotizacion }}
          </v-alert>
          <v-alert
            class="mt-5"
            type="error"
            icon="mdi-close-octagon"
            dense
            v-if="item.estado_de_la_cotizacion == 'Rechazada'"
          >
            {{ item.estado_de_la_cotizacion }}
          </v-alert>
          <!-- <b>partidas:  {{item.partida_en_orden_de_servicio}} / {{item.has_partidas.length}}  {{ var_computed_partidas_en_recibo }} </b> -->
        </td>
      </template>
      <template v-slot:item.tipo_de_servicio="{ item }">
        <td>
          <v-alert
            class="mt-5"
            type="success"
            icon="mdi-flag"
            dense
            outlined
            v-if="item.tipo_de_servicio == 'normal'"
          >
            {{ item.tipo_de_servicio }}
          </v-alert>
          <v-alert
            class="mt-5"
            type="error"
            icon="mdi-flag"
            dense
            outlined
            v-if="item.tipo_de_servicio == 'urgente'"
          >
            {{ item.tipo_de_servicio }}
          </v-alert>
          <v-alert
            class="mt-5"
            type="warning"
            icon="mdi-flag"
            dense
            outlined
            v-if="item.tipo_de_servicio == 'programado'"
          >
            {{ item.tipo_de_servicio }}
          </v-alert>
        </td>
      </template>
      <template v-slot:item.accion="{ item }">
        <td>
          <v-menu bottom left class="text-center">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon small color="primary" @click="ViewCotizacion(item)">
                      <v-icon color="primary" dark v-bind="attrs" v-on="on">
                        mdi-eye
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Orden de servicio</span>
                </v-tooltip>
              </v-list-item>
              <v-list-item>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon small color="error" @click="eliminarCotizacion(item)">
                      <v-icon color="error" dark v-bind="attrs" v-on="on">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Eliminar cotizacion</span>
                </v-tooltip>
              </v-list-item>
              <v-list-item>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon small color="warning" @click="EditarCotizacion(item)">
                      <v-icon color="warning" dark v-bind="attrs" v-on="on">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Editar cotizacion</span>
                </v-tooltip>
              </v-list-item>
              <v-list-item>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon small color="info" @click="printCotizacion(item)">
                      <v-icon color="info" dark v-bind="attrs" v-on="on">
                        mdi-printer
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Imprimir cotizacion</span>
                </v-tooltip>
              </v-list-item>
            </v-list>
          </v-menu>
        </td>
      </template>
      <template v-slot:item.contacto="{ item }">
        <td class="text-left">
          Nombre:{{ item.contacto }} <br />
          Teléfono:{{ item.contacto_telefono }} <br />
          Correo:{{ item.contacto_correo }} <br />
        </td>
      </template>
      <template
        v-slot:item.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social="{
          item,
        }"
      >
        <td>
          {{ item.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social
          }}<br />
          <!-- {{
            item.belongs_to_sucursal_cliente.nombre_sucursal !== null
              ? `Sucursal: ${item.belongs_to_sucursal_cliente.nombre_sucursal}`
              : ""
          }} -->
        </td>
      </template>
      <template v-slot:item.has_empleado.nombre_completo="{ item }">
        <td>{{ item.has_empleado.nombre_completo }}</td>
      </template>
      <template v-slot:item.has_moneda="{ item }">
        <td>{{ item.has_moneda.clave }}</td>
      </template>
      <template v-slot:item.sub_total="{ item }">
        <td>{{ item.sub_total | numberFormat(item.has_moneda.clave) }}</td>
      </template>
      <template v-slot:item.iva="{ item }">
        <td>{{ item.iva | numberFormat(item.has_moneda.clave) }}</td>
      </template>
      <template v-slot:item.total="{ item }">
        <td>{{ item.total | numberFormat(item.has_moneda.clave) }}</td>
      </template>
      <template v-slot:item.nota_de_seguimiento="{ item }">
        <v-btn color="success" small dense block @click="hacerNotaDeSeguimiento(item)">
          Nota de seguimiento <v-icon>mdi-note</v-icon></v-btn
        >
      </template>
    </v-data-table>
    <modal-add />
    <modal-edit />
    <modal-view />
    <modal-pdf />
    <notificacion />
    <modal-nota-seguimiento />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modaladdCotizacion from "./modals/modalAddCotizacionComponent.vue";
import modaleditCotizacion from "./modals/modalEditCotizacionComponent";
import modalViewCotizacion from "./modals/modalViewCotizacionComponent";
import modalViewPdfCotizaicon from "./modals/modalViewPdfComponent";
import modalNotaDeSeguimiento from "./modals/indexNotaDeseguimientoComponent.vue";
import NotificacionComponent from "../notificacion/indexComponentNotificacion.vue";
export default {
  components: {
    "modal-add": modaladdCotizacion,
    "modal-edit": modaleditCotizacion,
    "modal-view": modalViewCotizacion,
    "modal-pdf": modalViewPdfCotizaicon,
    "modal-nota-seguimiento": modalNotaDeSeguimiento,
    notificacion: NotificacionComponent,
  },
  data() {
    return {
      menu: false,
      headers_cotizacion: [
        {
          text: "Folio",
          value: "id",
          align: "start",
        },
        {
          text: "Fecha",
          value: "created_at",
          align: "start",
        },
        {
          text: "Cliente",
          value: "has_cliente.datos_fisicos_requeremientos_facturacion_razon_social",
          align: "start",
        },
        {
          text: "Contacto",
          value: "contacto",
          align: "start",
        },
        {
          text: "Vendedor",
          value: "has_empleado.nombre_completo",
          align: "start",
        },
        {
          text: "Estado",
          value: "estado_de_la_cotizacion",
          align: "start",
        },
        {
          text: "Tipo de Servicio",
          value: "tipo_de_servicio",
          align: "start",
        },
        {
          text: "Moneda",
          value: "has_moneda",
          align: "start",
        },
        {
          text: "Sub Total",
          value: "sub_total",
          align: "start",
        },
        {
          text: "IVA",
          value: "iva",
          align: "start",
        },
        {
          text: "Total",
          value: "total",
          align: "start",
        },
        {
          text: "Nota de seguimiento",
          value: "nota_de_seguimiento",
          align: "start",
        },
        {
          text: "Accion",
          value: "accion",
          align: "start",
        },
      ],
      search_cot: "",
    };
  },
  computed: {
    ...mapGetters(["services", "cotizaciones", "dialog_nota_de_seguimiento"]),
    // TODO: corregir esto
    // var_computed_partidas_en_recibo(){

    //     var result = 0;

    //     for(var i = 0; this.cotizaciones.length > i; i++ ){
    //         for(var j = 0; this.cotizaciones[i]['has_partidas'].length > j; j++ ){
    //             if(!this.cotizaciones[i]['has_partidas'][j].convertir_recibo){
    //                 result++
    //             }else{
    //                 result = 0
    //             }
    //                 this.cotizaciones[i].partida_en_orden_de_servicio = result
    //         }
    //                 console.log({result, c: this.cotizaciones[i].id})

    //     }
    // }
  },
  mounted() {
    this.services.cotizacionServices.getlistCotizaciones();
  },
  methods: {
    async EditarCotizacion(cot) {
      this.$store.commit("setDialogEditCotizacion", true);
      this.$store.commit("setCotizacion", cot);
    },
    eliminarCotizacion(item) {
      this.services.cotizacionServices.EliminarCotizacion(item);
      this.services.cotizacionServices.getlistCotizaciones();
    },
    ViewCotizacion(item) {
      this.$store.commit("setDialogViewCotizacion", true);
      this.$store.commit("setCotizacionView", item);
    },
    async printCotizacion(item) {
      await this.services.cotizacionServices.printCotizacion(item);
    },
    hacerNotaDeSeguimiento(item) {
      this.$store.commit("setDialogNotaDeSeguimiento", true);
      this.$store.commit("setCotizacion", item);
    },
  },
};
</script>

<style lang="scss" scoped>
$data-table-regular-row-height: 100px !default;
$data-table-scroll-bar-width: 50px !default;
</style>
