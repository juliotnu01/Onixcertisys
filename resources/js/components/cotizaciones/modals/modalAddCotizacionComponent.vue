<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent max-width="2556" min-width="2556">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="openDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title>Agregar Cotizacion</v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          text
          dark
          @click.prevent="$store.commit('setDialogCargarPartidaMasivamente', true)"
          tile
        >
          <v-icon>mdi-file-upload</v-icon> Cargar Partidas masivamente
        </v-btn>
        <v-btn text dark @click.prevent="addCotizacion" tile>
          <v-icon>mdi-content-save</v-icon> Guardar
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-card-text>
          <v-form ref="f_mag">
            <v-row align="center" justify="space-around">
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-autocomplete
                  offset-y
                  dense
                  v-model="model.cliente_selected"
                  :items="clientes"
                  item-text="datos_fisicos_requeremientos_facturacion_razon_social"
                  item-value="id"
                  outlined
                  s
                  label="Seleccionar Cliente"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-autocomplete
                  offset-y
                  dense
                  v-model="model.sucursal_cliente"
                  :items="model.cliente_selected.has_sucursal"
                  item-value="id"
                  item-text="nombre_sucursal"
                  outlined
                  s
                  label="Seleccionar sucursal"
                  return-object
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="3" lg="2">
                <v-autocomplete
                  offset-y
                  dense
                  v-model="model.moneda_selected"
                  :items="monedas"
                  item-text="clave"
                  outlined
                  s
                  label="Seleccionar Moneda"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="3" lg="2">
                <v-autocomplete
                  offset-y
                  dense
                  v-model="model.tde_selected"
                  :items="tiempos_de_entrega"
                  item-text="nombre"
                  outlined
                  s
                  label="Tiempo de Entrega"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="3" lg="2">
                <v-autocomplete
                  offset-y
                  dense
                  v-model="model.empleado_selected"
                  :items="empleados"
                  item-text="nombre_completo"
                  outlined
                  s
                  label="Empleado"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                <v-select
                  offset-y
                  dense
                  v-model="model.tipo_de_servicio_selected"
                  :items="tipo_de_servicio"
                  label="Tipo de Servicio"
                  outlined
                  item-text="name"
                  return-object
                  prepend-icon="mdi-clock"
                ></v-select>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                <v-select
                  offset-y
                  dense
                  v-model="model.estado_cotizacion_selected"
                  :items="estado_de_la_cotizacion"
                  label="Estado de la cotizacion"
                  outlined
                  item-text="name"
                  return-object
                  prepend-icon="mdi-flag"
                ></v-select>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="model.cliente_selected.contacto_adicionales_compra"
                  dense
                  outlined
                  label="Contacto"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="model.cliente_selected.contacto_adicionales_compra_telf"
                  dense
                  outlined
                  label="Teléfono"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                <v-text-field
                  v-model="model.cliente_selected.contacto_adicionales_compra_correo"
                  dense
                  outlined
                  label="Correo"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                <v-textarea
                  v-model="model.condiciones"
                  outlined
                  label="Condiciones"
                ></v-textarea>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                <v-textarea
                  v-model="model.nota_cotizacion"
                  outlined
                  label="Notas de la cotizacion"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-card class="p-1 elevation-2">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-select
                  offset-y
                  v-model="partida.servicio"
                  :items="servicio_partida"
                  label="Servicio"
                  outlined
                  item-text="name"
                  return-object
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-select
                  offset-y
                  v-model="partida.unidad"
                  :items="unidad_partida"
                  label="Unidad"
                  outlined
                  item-text="name"
                  return-object
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-autocomplete
                  offset-y
                  v-model="partida.instrumento"
                  :items="instrumentos"
                  item-text="nombre"
                  outlined
                  s
                  label="Seleccionar Instrumento"
                  return-object
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-text-field
                  v-model="partida.instrumento.alcance"
                  outlined
                  label="Alcance"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-text-field v-model="partida.cantidad" outlined label="Cantidad" />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-btn color="primary" block @click="AgregarPartida">
                  Agregar Partida
                  <v-icon small>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Identicacion</th>
                  <th class="text-left">Servicio</th>
                  <th class="text-left">Clave Sat</th>
                  <th class="text-left">Unidad</th>
                  <th class="text-left">Unidad Cod.</th>
                  <th class="text-left">Instrumento</th>
                  <th class="text-left">Marca</th>
                  <th class="text-left">Modelo</th>
                  <th class="text-left">Serie</th>
                  <th class="text-left">Alcance</th>
                  <th class="text-left">Acreditacion</th>
                  <th class="text-left">Precio Unitario</th>
                  <th class="text-left">Importe</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, p) in model.partidas" :key="p">
                  <td>
                    <v-text-field
                      label="Identifcacion"
                      v-model="item.identificacion"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                    />
                  </td>
                  <td>
                    {{ item.servicio.name }}
                  </td>
                  <td>
                    <v-autocomplete
                      label=""
                      outlined
                      dense
                      small
                      item-text="codigo"
                      :items="clavesSat"
                      item-value="id"
                      return-object
                      class="m-0 p-0"
                      v-model="item.clave_sat"
                    ></v-autocomplete>
                  </td>
                  <td>
                    {{ item.unidad.name }}
                  </td>
                  <td>
                    <v-autocomplete
                      label=""
                      outlined
                      dense
                      small
                      item-text="clave"
                      :items="unidades"
                      item-value="id"
                      return-object
                      class="m-0 p-0"
                      v-model="item.unidad_cod"
                    ></v-autocomplete>
                  </td>
                  <td>
                    {{ item.instrumento_nombre }}
                    <v-btn color="warning" icon @click="editarInstrumento(item)"
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                  </td>
                  <td>
                    <v-text-field
                      label="Marca"
                      v-model="item.marca"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                    />
                  </td>
                  <td>
                    <v-text-field
                      label="Modelo"
                      v-model="item.modelo"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                    />
                  </td>
                  <td>
                    <v-text-field
                      label="Serie"
                      v-model="item.serie"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                    />
                  </td>
                  <td>
                    {{ item.instrumento.alcance }}
                  </td>
                  <td>
                    {{ item.instrumento.has_acreditacion.nombre }}
                  </td>
                  <td>
                    <v-text-field
                      label="Precio venta"
                      v-model="item.precio_venta"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                      @change="ActualizarImporte(item)"
                    />
                  </td>
                  <td>
                    <v-text-field
                      label="Importe"
                      v-model="item.importe"
                      outlined
                      dense
                      small
                      class="m-0 p-0"
                    />
                  </td>
                  <td>
                    <v-btn icon small color="error" @click="eliminarPartida(item)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td :colspan="15">
                    <div class="text-right">
                      <h3>
                        SUBTOTAL :{{
                          var_computed_sub_total
                            | numberFormat(model.moneda_selected.clave)
                        }}
                      </h3>
                    </div>
                    <div class="text-right">
                      <h3>
                        IVA :{{
                          var_computed_iva | numberFormat(model.moneda_selected.clave)
                        }}
                      </h3>
                    </div>
                    <div class="text-right">
                      <h3>
                        TOTAL :{{
                          var_computed_total | numberFormat(model.moneda_selected.clave)
                        }}
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <modal-cargar-partidas-masivamente v-on:cargarPartidas="cargarPartidasImportadas" />
    <modal-edit-instrumento />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalCargarPartidaMasivamente from "./modalCargarPartidaMasivamenteComponent";
import modalEditInstrumento from "../../config/datosGenerales/instrumento/modals/modalEditInstrumentocomponent.vue";
export default {
  components: {
    "modal-cargar-partidas-masivamente": modalCargarPartidaMasivamente,
    "modal-edit-instrumento": modalEditInstrumento,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Este campo es requerido.",
      },
      tipo_de_servicio: [
        {
          name: "normal",
          value: 1,
        },
        {
          name: "urgente",
          value: 2,
        },
        {
          name: "programado",
          value: 3,
        },
      ],
      estado_de_la_cotizacion: [
        {
          name: "pendiente",
          value: 1,
        },
        {
          name: "Orden de servicio",
          value: 2,
        },
        {
          name: "Rechazada",
          value: 3,
        },
      ],
      model: {
        cliente_selected: {},
        sucursal_cliente: {},
        moneda_selected: {},
        tde_selected: {},
        empleado_selected: {},
        tipo_de_servicio_selected: {
          name: "normal",
          value: 1,
        },
        estado_cotizacion_selected: {
          name: "pendiente",
          value: 1,
        },
        contacto: "",
        telefono: "",
        correo: "",
        condiciones: "",
        nota_cotizacion: "",
        nota_seguimiento: "",
        partidas: [],
        sub_total: 0,
        iva: 0,
        total: 0,
      },
      partida: {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {},
        unidad_cod: { clave: "E48", nombre: "Unidad de Servicio" },
        clave_sat: {
          codigo: "81141504",
          descripcion: "Reparación o calibración de pruebas de equipo",
        },
      },
      servicio_partida: [
        {
          name: "Calibracion",
          value: 1,
        },
        {
          name: "Reparacion",
          value: 2,
        },
        {
          name: "Garantia",
          value: 3,
        },
        {
          name: "Venta",
          value: 4,
        },
      ],
      unidad_partida: [
        {
          name: "servicio",
          Value: 1,
        },
        {
          name: "Pieza",
          Value: 2,
        },
        {
          name: "Juego",
          Value: 3,
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "dialog_add_cotizacion",
      "clientes",
      "monedas",
      "empleados",
      "tiempos_de_entrega",
      "instrumentos",
      "masivPartidas",
      "unidades",
      "clavesSat",
    ]),
    openDialog: {
      get() {
        return this.dialog_add_cotizacion;
      },
      set(val) {
        this.$store.commit("setDialogAddCotizacion", val);
      },
    },
    var_computed_sub_total: {
      get() {
        var result = 0;
        this.model.partidas.forEach((item) => {
          result += item.importe;
        });
        this.model.sub_total = result;
        return this.model.sub_total;
      },
      set(newVal) {
        this.model.sub_total = newVal;
      },
    },
    var_computed_iva: {
      get() {
        var result = 0,
          item_iva = 0;
        this.model.partidas.forEach((item) => {
          item_iva = (item.importe * this.model.cliente_selected.iva) / 100;
          result += item_iva;
        });
        this.model.iva = result;
        return this.model.iva;
      },
      set(newVal) {
        this.model.iva = newVal;
      },
    },
    var_computed_total: {
      get() {
        var result = 0;
        result = this.var_computed_sub_total + this.var_computed_iva;
        this.model.total = result;
        return this.model.total;
      },
      set(newVal) {
        this.model.total;
      },
    },
  },
  async mounted() {
    await this.services.clienteServices.getlistclientes();
    this.services.monedaServices.getlistMonedas();
    this.services.tiempoDeEntregaServices.getlistTiempoDeEntrega();
    this.services.empleadoServices.getlistEmpleados();
    this.services.instrumentoServices.getlistInstrumentos();
    this.services.unidadServices.getUnidades();
    this.services.claveSatServices.getclavesSat();
  },
  methods: {
    AgregarPartida() {
      for (var i = 0; i < this.partida.cantidad; i++) {
        var model = {
          identificacion: this.partida.identificacion,
          instrumento: this.partida.instrumento,
          instrumento_nombre: this.partida.instrumento.nombre,
          cantidad: 1,
          marca: this.partida.marca,
          modelo: this.partida.modelo,
          serie: this.partida.serie,
          importe: this.partida.instrumento.precio_venta * 1,
          servicio: this.partida.servicio,
          unidad: this.partida.unidad,
          precio_venta: this.partida.instrumento.precio_venta,
          unidad_cod: this.partida.unidad_cod,
          clave_sat: this.partida.clave_sat,
        };
        this.model.partidas.push(model);
      }
      this.partida = {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {},
        unidad_cod: {},
        clave_sat: {},
      };
    },
    async addCotizacion() {
      if (this.$refs.f_mag.validate()) {
        await this.services.cotizacionServices.agregarCotizacion(this.model);
        await this.services.cotizacionServices.getlistCotizaciones();
        this.model = {
          cliente_selected: {},
          moneda_selected: {},
          tde_selected: {},
          empleado_selected: {},
          tipo_de_servicio_selected: {},
          estado_cotizacion_selected: {},
          contacto: "",
          telefono: "",
          correo: "",
          condiciones: "",
          nota_cotizacion: "",
          nota_seguimiento: "",
          partidas: [],
          sub_total: 0,
          iva: 0,
          total: 0,
        };
        this.$store.commit("setMasivPartidas", []);
      }
    },
    eliminarPartida(item) {
      var index = this.model.partidas.findIndex(
        (item) => item.identificacion === item.identificacion
      );
      this.model.partidas.splice(index, 1);
    },
    cargarPartidasImportadas(masivPartidas) {
      var partida = {
        identificacion: "",
        instrumento: {},
        instrumento_nombre: "",
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {},
        precio_venta: 0,
      };
      this.masivPartidas.forEach((item) => {
        partida = {
          identificacion: item.identificacion,
          instrumento: item.has_instrumento,
          instrumento_nombre: item.has_instrumento.nombre,
          cantidad: 1,
          marca: item.marca,
          modelo: item.modelo,
          serie: item.serie,
          importe: 1 * item.has_instrumento.precio_venta,
          servicio: item.servicio,
          unidad: item.unidad,
          precio_venta: item.has_instrumento.precio_venta,
        };
        this.model.partidas.push(partida);
      });
    },
    ActualizarImporte(item) {
      item.importe = item.cantidad * item.precio_venta;
    },
    async editarInstrumento(inst) {
      this.$store.commit("setInstrumento", inst.instrumento);
      this.$store.commit("setDialogEditInstrumento", true);
    },
  },
};
</script>
