<template>
  <v-app>
    <v-layout row justify-center>
      <v-dialog v-model="openDialog" persistent max-width="1256">
        <v-toolbar color="primary">
          <v-btn icon dark @click="openDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text dark @click="GenerarRecibo">
            <v-icon>mdi-receipt</v-icon>Generar Recibo
          </v-btn>
        </v-toolbar>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-autocomplete
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.has_cliente"
                    :items="clientes"
                    item-text="razon_social"
                    outlined
                    label="Seleccionar Cliente"
                    return-object
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-autocomplete
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.has_moneda"
                    :items="monedas"
                    item-text="clave"
                    outlined
                    label="Seleccionar Moneda"
                    return-object
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-autocomplete
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.has_tiempo_de_entrega"
                    :items="tiempos_de_entrega"
                    item-text="nombre"
                    outlined
                    label="Tiempo de Entrega"
                    return-object
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-autocomplete
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.has_empleado"
                    :items="empleados"
                    item-text="nombre_completo"
                    outlined
                    label="Empleado"
                    return-object
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-select
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.tipo_de_servicio"
                    :items="tipo_de_servicio"
                    label="Tipo de Servicio"
                    outlined
                    item-text="name"
                    return-object
                  ></v-select>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-select
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.estado_de_la_cotizacion"
                    :items="estado_de_la_cotizacion"
                    label="Estado de la cotizacion"
                    outlined
                    item-text="name"
                    return-object
                  ></v-select>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.has_cliente.nombre_completo"
                    dense
                    outlined
                    label="Contacto"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.has_cliente.celular_contacto"
                    dense
                    outlined
                    label="Teléfono"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.has_cliente.correo_contacto"
                    dense
                    outlined
                    label="Correo"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.condicion"
                    dense
                    outlined
                    label="Condiciones"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-textarea
                    disabled
                    v-model="cotizacion_view.nota_para_la_cotizacion"
                    outlined
                    label="Notas de la cotizacion"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-textarea
                    disabled
                    v-model="cotizacion_view.nota_de_seguimiento"
                    outlined
                    label="Notas de seguimiento"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <v-data-table
              dense
              :headers="headers_cotizacion"
              :items="cotizacion_view.has_partidas"
              item-key="name"
              class="elevation-1 mt-5"
            >
              <template v-slot:item.has_intrumento="{ item }">
                <td>
                  <strong class="text-left">{{item.identificacion}}</strong>
                  <br />
                  <div class="float-left">
                    <strong>ID:</strong>
                    <small>{{item.identificacion}}</small>
                  </div>
                  <br />
                  <div class="float-left">
                    <strong>Marca:</strong>
                    <small>{{item.marca}}</small>
                  </div>
                  <br />
                  <div class="float-left">
                    <strong>Modelo:</strong>
                    <small>{{item.modelo}}</small>
                  </div>
                  <br />
                  <div class="float-left">
                    <strong>Serie:</strong>
                    <small>{{item.serie}}</small>
                  </div>
                  <br />
                  <div class="float-left">
                    <strong>Magnitud:</strong>
                    <small>{{item.has_intrumento.has_magnitud.nombre}}</small>
                  </div>
                </td>
              </template>
              <template v-slot:item.tipo="{ item }">
                <td>
                  <v-select
                    class="text-center mt-5"
                    :items="items_tipo"
                    v-model="item.tipo"
                    label
                    item-text="name"
                    return-object
                    outlined
                    dense
                    offset-y
                    v-if="!item.tipo"
                  ></v-select>
                  <span v-else class="text-center" >{{item.tipo}}</span>
                </td>
              </template>
              <template v-slot:item.informe="{ item }">
                <td>
                  <span v-if="item.informe_id">{{item.informe_id}}</span>
                  <v-btn
                    v-else
                    color="primary"
                    block
                    class="text-center mt-5"
                    @click="GenerarIdInforme(item)"
                  >Generar ID Informe</v-btn>
                </td>
              </template>
              <template v-slot:item.accion="{ item }">
                <td>
                  <v-switch
                    label
                    v-model="item.convertir_recibo"
                    class="text-center mt-5 w-50"
                    small
                  ></v-switch>
                </td>
              </template>
              <template v-slot:item.vigencia="{ item }">
                <td>
                  <v-text-field
                    v-model="item.vigencia"
                    label
                    outlined
                    dense
                    class="mt-5 text-center"
                    v-if="!item.vigencia"
                  ></v-text-field>
                  <span v-else class="text-center">{{item.vigencia}}</span>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Este campo es requerido.",
      },
      value: false,
      items_tipo: [
        {
          name: "Normal",
          value: 1,
        },
        {
          name: "Urgente",
          value: 2,
        },
        {
          name: "Programado",
          value: 3,
        },
      ],
      headers_cotizacion: [
        {
          text: "Servicio",
          value: "servicio",
          align: "center",
        },
        {
          text: "Unidad",
          value: "unidad",
          align: "center",
        },
        {
          text: "Informe",
          value: "informe",
          align: "center",
        },
        {
          text: "Instrumento",
          value: "has_intrumento",
          align: "center",
        },
        {
          text: "Acreditacion",
          value: "has_intrumento.has_acreditacion.nombre",
          align: "center",
        },
        {
          text: "Tipo",
          value: "tipo",
          align: "center",
        },
        {
          text: "Vigencia",
          value: "vigencia",
          align: "center",
        },
        {
          text: "Convertir en recibo",
          value: "accion",
          align: "center",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "dialog_view_cotizacion",
      "cotizacion_view",
      "clientes",
      "clientes",
      "monedas",
      "empleados",
      "tiempos_de_entrega",
      "informe_id_db",
    ]),
    openDialog: {
      get() {
        return this.dialog_view_cotizacion;
      },
      set(val) {
        this.$store.commit("setDialogViewCotizacion", val);
      },
    },
  },
  methods: {
    async GenerarIdInforme(item) {
      var model = {
        clave_info: item.has_intrumento.has_magnitud.clave,
        cotizacion_id: this.cotizacion_view.id,
        partida_id: item.id,
        info_id: 0,
      };
      this.services.identificadorInformeServices.agregarIdentificador(model);
    },
    GenerarRecibo() {
      var model = {
        estado: "pendiente",
        cotizacion_id: this.cotizacion_view,
      };
      this.services.reciboServices.agregarRecibo(model);
    },
  },
};
</script>
