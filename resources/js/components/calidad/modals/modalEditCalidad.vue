<template>
  <v-app>
    <v-dialog v-model="openDialog" width="800">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="openDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-card-title class="text-h5" dark> Calidad </v-card-title>
        </v-toolbar>
        <v-card-title v-if="Object.entries(this.partida_calidad).length > 0 " >
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.has_cliente
              .datos_fisicos_requeremientos_facturacion_razon_social
          }}
        </v-card-title>
        <v-card-subtitle v-if="Object.entries(this.partida_calidad).length > 0 " >
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.has_cliente
              .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle
          }},
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.has_cliente
              .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad
          }},
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.has_cliente
              .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia
          }},
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.has_cliente
              .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado
          }}
          <br />
          <strong>Condicion:</strong>
          {{ partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.condicion }}
          <br />
          <strong>Contacto:</strong>
          {{ partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.contacto }}
          <br />
          <strong>Correo Contacto:</strong>
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.contacto_correo
          }}
          <br />
          <strong>Telefono Contacto:</strong>
          {{
            partida_calidad.belongs_to_partida.has_recibo.has_cotizaicon.contacto_telefono
          }}
          <br />
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-title v-if="Object.entries(this.partida_calidad).length > 0 ">
          {{ partida_calidad.belongs_to_partida.has_intrumento.nombre }}
        </v-card-title>
        <v-card-subtitle v-if="Object.entries(this.partida_calidad).length > 0 ">
          <strong>Marca:</strong> {{ partida_calidad.belongs_to_partida.marca }} <br />
          <strong>Modelo:</strong> {{ partida_calidad.belongs_to_partida.modelo }} <br />
          <strong>Serie:</strong> {{ partida_calidad.belongs_to_partida.serie }} <br />
          <strong>Alcance:</strong>
          {{ partida_calidad.belongs_to_partida.has_intrumento.alcance }} <br />
          <strong>Servicio:</strong> {{ partida_calidad.belongs_to_partida.servicio }}
          <br />
          <strong>Lugar de Servicio:</strong>
          {{ partida_calidad.belongs_to_partida.lugar_servicio }} <br />
          <strong>Observacion:</strong>
          {{ partida_calidad.belongs_to_partida.observacion }} <br />
          <strong>Fecha inicio de calibracion:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.fecha_inicio_calibracion }} <br />
          <strong>Fecha fin de calibracion:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.fecha_terminacion_calibracion }} <br />
          <strong>Descripcion de la anomalia:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.descripcion_anomalia }} <br />
          <strong>fecha de la anomalia:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.fecha_anomalia }} <br />
          <strong>Observacion tecnico:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.observacion_tecnico }} <br />
          <strong>Estado Calibracion:</strong>
          {{ partida_calidad.belongs_to_partida.has_calibracion.estado }} <br />
        </v-card-subtitle>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-autocomplete
                    v-model="partida_calidad.belongs_to_empleado"
                    :items="empleados"
                    outlined
                    dense
                    label="Revisado por"
                    item-text="nombre_completo"
                    value="id"
                    return-object
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-textarea
                    v-model="partida_calidad.observacion"
                    outlined
                    name="input-7-4"
                    label="Observacion"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-radio-group v-model="partida_calidad.status_calidad" row>
                    <v-radio label="Autorizado" value="Autorizado" color="success" ></v-radio>
                    <v-radio label="No autorizado" value="No autorizado" color="error"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_edit_calidad", "partida_calidad", "empleados"]),
    openDialog: {
      get() {
        return this.dialog_edit_calidad;
      },
      set(val) {
        this.$store.commit("setDialogEditCalidad", val);
      },
    },
  },
  mounted() {
    this.services.empleadoServices.getlistEmpleados();
  },
};
</script>
