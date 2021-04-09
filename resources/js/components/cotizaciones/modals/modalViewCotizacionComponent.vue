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
            <v-icon>mdi-receipt</v-icon>Generar Orden de Servicio
          </v-btn>
        </v-toolbar>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row
                align="center"
                justify="space-around"
                v-if="Object.entries(this.cotizacion_view).length > 0"
              >
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-autocomplete
                    disabled
                    offset-y
                    dense
                    v-model="cotizacion_view.has_cliente"
                    :items="clientes"
                    item-text="datos_fisicos_requeremientos_facturacion_razon_social"
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
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.has_cliente.contacto_adicionales_compra"
                    dense
                    outlined
                    label="Contacto"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="cotizacion_view.has_cliente.contacto_adicionales_compra_telf"
                    dense
                    outlined
                    label="Teléfono"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                  <v-text-field
                    disabled
                    :rules="[rules.required]"
                    v-model="
                      cotizacion_view.has_cliente.contacto_adicionales_compra_correo
                    "
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
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-textarea
                    disabled
                    v-model="cotizacion_view.nota_para_la_cotizacion"
                    outlined
                    label="Notas de la cotizacion"
                  ></v-textarea>
                </v-col>
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
              <template slot="items" slot-scope="props">
                <td class="text-center">{{ props.item.servicio }}</td>
                <td class="text-center">{{ props.item.has_clave_sat.codigo }}</td>
                <td class="text-center">{{ props.item.unidad }}</td>
                <td class="text-center">{{ props.item.has_unidad.clave }}</td>
                <td class="text-center">{{ props.item.informe }}</td>
                <td class="text-center">{{ props.item.has_intrumento }}</td>
                <td class="text-center">
                  {{ props.item.has_intrumento.has_acreditacion.nombre }}
                </td>
                <td class="text-center">{{ props.item.tipo }}</td>
                <td class="text-center">{{ props.item.vigencia }}</td>
                <td class="text-center">{{ props.item.accion }}</td>
              </template>
              <template v-slot:item.has_intrumento="{ item }">
                <td>
                  <div class="text-left w-100">
                    <strong>{{ item.identificacion }}</strong>
                  </div>
                  <div class="text-left w-100">
                    <strong>ID:</strong>
                    <small>{{ item.identificacion }}</small>
                  </div>
                  <div class="text-left w-100">
                    <strong>Marca:</strong>
                    <small>{{ item.marca }}</small>
                  </div>
                  <div class="text-left w-100">
                    <strong>Modelo:</strong>
                    <small>{{ item.modelo }}</small>
                  </div>
                  <div class="text-left w-100">
                    <strong>Serie:</strong>
                    <small>{{ item.serie }}</small>
                  </div>
                  <div class="text-left w-100">
                    <strong>Magnitud:</strong>
                    <small>{{ item.has_intrumento.has_magnitud.nombre }}</small>
                  </div>
                </td>
              </template>
              <template v-slot:item.tipo="{ item }">
                <td class="text-center">
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
                  <div v-else class="text-center">{{ item.tipo.name }}</div>
                </td>
              </template>
              <template v-slot:item.informe="{ item }">
                <td>
                  <span v-if="item.informe_id">{{ item.informe_id }}</span>
                  <v-btn
                    v-else
                    color="primary"
                    block
                    class="text-center mt-5"
                    @click="GenerarIdInforme(item)"
                    >Generar Certificado</v-btn
                  >
                </td>
              </template>
              <template v-slot:item.convert_recibo="{ item }">
                <td>
                  <v-switch
                    label
                    v-model="item.convertir_recibo"
                    class="text-center mt-5 w-50"
                    small
                  />
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
                  />
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
      edit_caliente_partida: false,
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
          text: "Clave sat",
          value: "has_clave_sat.codigo",
          align: "center",
        },
        {
          text: "Unidad",
          value: "unidad",
          align: "center",
        },
        {
          text: "Unidad cod.",
          value: "has_unidad.clave",
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
          width: 150
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
          text: "Vigencia(Meses)",
          value: "vigencia",
          align: "center",
        },
        {
          text: "Convertir en O.D.S",
          value: "convert_recibo",
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
    async GenerarRecibo() {

      try {
             var model = {
              estado: "pendiente",
              cotizacion_id: this.cotizacion_view,
            };
            await this.services.reciboServices.agregarRecibo(model);
            await this.services.cotizacionServices.getlistCotizaciones();

      } catch (error) {
        console.log(error)
      }
      
    },
  },
};
</script>
