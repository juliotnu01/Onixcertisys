<template>
  <v-app>
    <v-card>
      <template>
        <v-data-table
          :headers="headers"
          :items="facturas"
          item-key="name"
          class="elevation-1"
          :search="buscar_factura"
        >
          <template v-slot:top>
            <v-text-field
              label="Buscar Factura"
              v-model="buscar_factura"
              outlined
              dense
            ></v-text-field>
          </template>
          <template v-slot:footer>
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12" v-if="saldoTimbre.hasOwnProperty('data')"  >
                <v-alert dense type="info">
                  Cliente ID: <strong>{{ saldoTimbre.data.idClienteUsuario }}</strong>
                  <v-chip class="ma-2" color="primary">
                    Saldo timbres: <strong>{{ saldoTimbre.data.saldoTimbres }}</strong>
                  </v-chip>
                  <v-chip class="ma-2" color="primary">
                    Timbres utilizados:
                    <strong>{{ saldoTimbre.data.timbresUtilizados }}</strong>
                  </v-chip>
                  <v-chip class="ma-2" color="primary">
                    Timbres asignados:
                    <strong>{{ saldoTimbre.data.timbresAsignados }}</strong>
                  </v-chip>
                </v-alert>
              </v-col>
            </v-row>
          </template>
          <template v-slot:item.subtotal="{ item }">
            {{ item.subtotal | numberFormat(item.has_moneda.clave) }}
          </template>
          <template v-slot:item.iva="{ item }">
            {{ item.iva | numberFormat(item.has_moneda.clave) }}
          </template>
          <template v-slot:item.total="{ item }">
            {{ item.total | numberFormat(item.has_moneda.clave) }}
          </template>
          <template v-slot:item.cotizaciones_ids="{ item }">
            <v-menu open-on-hover left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Cotizaciones
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in JSON.parse(item.cotizaciones_ids)"
                  :key="index"
                >
                  <v-list-item-title>
                    Cotizacion: {{ item }} <v-icon small dense>mdi-eye</v-icon>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-slot:item.recibos_ids="{ item }">
            <v-menu open-on-hover left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Ordenes de Servicios
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in JSON.parse(item.recibos_ids)"
                  :key="index"
                >
                  <v-list-item-title>
                    Orden de Servicio : {{ item }} <v-icon small dense>mdi-eye</v-icon>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-slot:item.created_at="{ item }">
            {{ item.created_at.substr(0, 10) }} {{ item.created_at.substr(11, 8) }}
          </template>
          <template v-slot:item.acciones="{ item }">
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
                        <v-btn icon small color="primary">
                          <v-icon color="success" dark v-bind="attrs" v-on="on">
                            mdi-bell
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Timbrar Factura</span>
                    </v-tooltip>
                  </v-list-item>
                  <v-list-item>
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon small color="error">
                          <v-icon color="error" dark v-bind="attrs" v-on="on">
                            mdi-bell-cancel
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Cancelar Factura</span>
                    </v-tooltip>
                  </v-list-item>
                  <v-list-item>
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon small color="warning">
                          <v-icon color="warning" dark v-bind="attrs" v-on="on">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Editar Factura</span>
                    </v-tooltip>
                  </v-list-item>
                  <v-list-item>
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon small color="info">
                          <v-icon color="info" dark v-bind="attrs" v-on="on">
                            mdi-xml
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Descargar Xml</span>
                    </v-tooltip>
                  </v-list-item>
                  <v-list-item>
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon small color="info">
                          <v-icon color="info" dark v-bind="attrs" v-on="on">
                            mdi-file-pdf
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Descargar Pdf</span>
                    </v-tooltip>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </template>
        </v-data-table>
      </template>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      buscar_factura: "",
      headers: [
        {
          text: "Folio",
          align: "center",
          sortable: false,
          value: "id",
        },
        {
          text: "Fecha y Hora",
          align: "center",
          sortable: false,
          value: "created_at",
        },
        {
          text: "UUID",
          align: "center",
          sortable: false,
          value: "uuid",
        },
        {
          text: "Numero Cotizacion",
          align: "center",
          sortable: false,
          value: "cotizaciones_ids",
        },
        {
          text: "Numero Orden de Servicio",
          align: "center",
          sortable: false,
          value: "recibos_ids",
        },
        {
          text: "Cliente",
          align: "center",
          sortable: false,
          value: "has_cliente.datos_fisicos_requeremientos_facturacion_razon_social",
        },
        {
          text: "R.F.C",
          align: "center",
          sortable: false,
          value: "rfc",
        },
        {
          text: "SUBTOTAL",
          align: "center",
          sortable: false,
          value: "subtotal",
        },
        {
          text: "IVA",
          align: "center",
          sortable: false,
          value: "iva",
        },
        {
          text: "TOTAL",
          align: "center",
          sortable: false,
          value: "total",
        },
        {
          text: "Estado de la Factura",
          align: "center",
          sortable: false,
          value: "estado",
        },
        {
          text: "Acciones",
          align: "center",
          sortable: false,
          value: "acciones",
        },
      ],
    };
  },
  mounted() {
    this.services.facturaServices.getlistFacturas();
    this.services.facturaServices.consultarSaldoTimprado();
  },
  computed: {
    ...mapGetters(["services", "facturas", "saldoTimbre"]),
  },
};
</script>
