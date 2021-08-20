<template>
  <div class="text-center">
    <v-dialog v-model="openDialog">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="openDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <h4 class="text-right mr-5 mt-4"><strong>Fecha:</strong> {{ fecha }}</h4>
          <v-btn color="#0095d9" @click="RegistrarFactura" :loading="loading_registrar_factura" > Registrar Factura </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row v-if="Object.entries(factura).length > 0">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
              <div>
                <h4>
                  <strong>Cliente: </strong>
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_razon_social
                  }}
                </h4>
                <h4>
                  <strong> Dirección Fiscal:</strong> Cll.
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle
                  }}
                  #
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero
                  }}
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia
                  }}
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad
                  }}
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado
                  }}
                </h4>
                <h4>
                  <strong> R.F.C.: </strong>
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_rfc
                  }}
                </h4>
                <h4>
                  <strong> Uso C.F.D.I.:</strong>
                  {{ factura.cliente.has_cliente.cdfi }}
                </h4>
                <h4>
                  <strong> Forma de pago :</strong>
                  {{ factura.cliente.has_cliente.forma_de_pago }}
                </h4>
                <h4>
                  <strong> Metodo de pago : </strong>
                  {{ factura.cliente.has_cliente.metodo_de_pago }}
                </h4>
                <h4>
                  <strong> Condiciones de pago :</strong>
                  {{ factura.cliente.has_cliente.termino_de_pago }}
                </h4>
                <h4>
                  <strong>CP de Expedición : </strong>
                  {{
                    factura.cliente.has_cliente
                      .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp
                  }}
                </h4>
                <h4>
                  <strong>Moneda :</strong>
                  {{ factura.cliente.has_moneda.clave }}
                </h4>
                <h4>
                  <strong>Orden de compra :</strong>
                  {{ factura.orden_de_compra }}
                </h4>
                <h4><strong>NOTA :</strong> {{ factura.nota }}</h4>
              </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center">Orden de servicio</th>
                      <th class="text-center">Folio</th>
                      <th class="text-center">Clave Sat</th>
                      <th class="text-center">ID informe</th>
                      <th class="text-center">Concepto</th>
                      <th class="text-center">Instrumento</th>
                      <th class="text-center">Estado de la calibracion</th>
                      <th class="text-center">Precio Unitario</th>
                      <th class="text-center">Importe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in factura.partidas" :key="item.name">
                      <td class="text-center">
                        {{ item.reciboID }}
                      </td>
                      <td class="text-center">
                        {{ item.cotizacionID }}
                      </td>
                      <td class="text-center">
                        {{ item.has_clave_sat.codigo }}
                      </td>
                      <td class="text-center">
                        {{ item.informe_id }}
                      </td>
                      <td class="text-center">Servicio de {{ item.servicio }}</td>
                      <td class="text-center">
                        {{ item.has_intrumento.nombre }}<br />
                        ID:{{ item.identificacion }}<br />
                        Marca:{{ item.marca }}<br />
                        Modelo:{{ item.modelo }}<br />
                        Serie:{{ item.serie }}<br />
                      </td>
                      <td clas="text-center">
                        <v-alert
                          dense
                          outlined
                          type="error"
                          v-if="!item.has_calibracion"
                          class="m-0 p-0"
                        >
                          por iniciar
                        </v-alert>
                        <v-alert
                          dense
                          outlined
                          type="warning"
                          v-else-if="item.has_calibracion.estado === 'en proceso'"
                          class="m-0 p-0"
                        >
                          {{ item.has_calibracion.estado }}
                        </v-alert>
                        <v-alert dense outlined type="success" v-else class="m-0 p-0">
                          {{ item.has_calibracion.estado }}
                        </v-alert>
                      </td>
                      <td clas="text-center">
                        {{
                          item.has_intrumento.precio_venta
                            | numberFormat(
                              Object.entries(factura).length > 0
                                ? factura.cliente.has_moneda.clave
                                : ""
                            )
                        }}
                      </td>
                      <td clas="text-center">
                        {{
                          item.importe
                            | numberFormat(
                              Object.entries(factura).length > 0
                                ? factura.cliente.has_moneda.clave
                                : ""
                            )
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="9">
                        <h3 class="text-right">
                          SUBTOTAL:
                          {{
                            factura.subtotal
                              | numberFormat(
                                Object.entries(factura).length > 0
                                  ? factura.cliente.has_moneda.clave
                                  : ""
                              )
                          }}
                        </h3>
                        <h3 class="text-right">
                          IVA :
                          {{
                            factura.iva
                              | numberFormat(
                                Object.entries(factura).length > 0
                                  ? factura.cliente.has_moneda.clave
                                  : ""
                              )
                          }}
                        </h3>
                        <h3 class="text-right">
                          TOTAL:
                          {{
                            factura.total
                              | numberFormat(
                                Object.entries(factura).length > 0
                                  ? factura.cliente.has_moneda.clave
                                  : ""
                              )
                          }}
                        </h3>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card-text>
        <v-snackbar v-model="snackbar_error_factura" color="error" :timeout="-1">
            <div v-if="Object.entries(this.error_message_factura).length > 0" >
              {{ error_message_factura.data.data.message }}<br/>
              {{ error_message_factura.data.data.messageDetail }}
            </div>
            <template v-slot:action="{ attrs }">
              <v-btn color="#0095d9" dark v-bind="attrs" @click="snackbar_error_factura = false"> Cerrar</v-btn>
            </template>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      fecha: moment().format("l"),
      snackbar_error_factura:false,
      error_message_data_factura:{},
      loading_registrar_factura:false,
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_factura", "factura", "error_message_factura"]),
    openDialog: {
      get() {
        return this.dialog_add_factura;
      },
      set(val) {
        this.$store.commit("setDialogAddFactura", val);
      },
    },
  },
  methods: {
    async RegistrarFactura() {
      try {
        this.loading_registrar_factura = true
        await this.services.facturaServices.agregarFactura(this.factura);
        if (Object.entries(this.error_message_factura).length > 0) {
          this.snackbar_error_factura = true
          this.error_message_data_factura = this.error_message_factura.data.data
        }
        this.loading_registrar_factura = false
      } catch (e) {
        console.log(e);
        this.loading_registrar_factura = false
      }
    },
  },
};
</script>
