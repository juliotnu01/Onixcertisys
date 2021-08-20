<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent>
      <v-toolbar dark color="primary">
        <v-toolbar-title v-if="Object.entries(this.cotizacion).length > 0">
          NOTA:
          <strong >{{
            cotizacion.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social
          }}</strong>
          / {{ cotizacion.created_at.substr(0, 10) }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="openDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-sheet>
        <v-row>
          <v-col xs="12" sm="12" md="12" lg="12">
            <v-text-field
              label="Escribe un comentario"
              outlined
              v-model="model_inicio_cotizacion.nota_seguimiento"
              append-icon="mdi-check"
              prepend-inner-icon="mdi-close"
              @click:append="iniciarNotaSeguimientoCotizacion(i)"
              @click:prepend-inner="model_inicio_cotizacion.nota_seguimiento = ''"
              class="mx-5"
            />
          </v-col>
          <v-col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              v-for="(i, n) in cotizacion.has_nota_de_seguimiento"
              :key="n"
            >
            <v-card class="m-5 elevation-2">
               <v-alert
                  border="left"
                  colored-border
                  color="#0095d9"
                  elevation="5"
                  type="info"
                >
                     {{ i.nota_seguimiento }}
                     <p class="text--disabled text-right">
                        <small> {{i.created_at}}</small>
                      </p>
                </v-alert>
              <div class="text-right p-5">
                <v-alert
                  border="right"
                  colored-border
                  color="#003177"
                  elevation="5"
                  v-for="(sc, x) in i.has_onw_note" :key="x"
                  
                >
                    {{ sc.nota_seguimiento }}
                    <p class="text--disabled text-left">
                        <small> {{sc.created_at}}</small>
                      </p>
                </v-alert>
              </div>
              <v-card-actions>
                <v-row>
                  <v-col xs="12" sm="12" md="12" lg="12">
                      <v-text-field
                      name="name"
                      label="Escribe un comentario para el seguimiento de la cotizacion"
                      id="id"
                      outlined
                      v-model="add_comentario_cotizacion.nota_seguimiento"
                      append-icon="mdi-check"
                      prepend-inner-icon="mdi-close"
                      @click:append="AgregarComentarioACotizacion(i)"
                      @click:prepend-inner="add_comentario_cotizacion.nota_seguimiento = ''"
                    />
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-dialog>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      var_instrumento_selected: {},
      model_inicio_cotizacion: {
        nota_seguimiento: "",
      },
      add_comentario_cotizacion: {
        nota_seguimiento: "",
      },
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "dialog_nota_de_seguimiento",
      "NotdasDeSeguimiento",
      "cotizacion",
    ]),
    openDialog: {
      get() {
        return this.dialog_nota_de_seguimiento;
      },
      set(val) {
        this.$store.commit("setDialogNotaDeSeguimiento", val);
      },
    },
  },
  async mounted() {
    this.services.NotdasDeSeguimientoServices.getlisNotasDeSeguimiento();
  },
  methods: {
    async iniciarNotaSeguimientoCotizacion() {
      try {
        this.cotizacion.has_nota_de_seguimiento.push(this.model_inicio_cotizacion);
        let { data } = await axios.post("/api/iniciar-nota-seguimiento-cotizacion", {
          model: this.model_inicio_cotizacion,
          cotizacion: this.cotizacion,
        });
        this.model_inicio_cotizacion = {
          nota_seguimiento: "",
        };
      } catch (error) {
        console.log(error);
      }
    },
    async iniciarNotaSeguimientoCalibracion() {
      try {
        this.var_instrumento_selected.has_nota_de_seguimiento.push(
          this.model_inicio_cotizacion
        );
        let { data } = await axios.post("/api/iniciar-nota-seguimiento-calibracion", {
          model: this.model_inicio_cotizacion,
          partida: this.var_instrumento_selected,
        });
        this.model_inicio_cotizacion = {
          nota_seguimiento: "",
        };
      } catch (error) {
        console.log(error);
      }
    },
    async AgregarComentarioACalibracion(item) {
      try {
        let { data } = await axios.post("/api/add-nota-seguimiento-calibracion", {
          model: this.add_comentario_cotizacion,
          partida: item,
        });
        item.has_onw_note.push(this.add_comentario_cotizacion);
        this.add_comentario_cotizacion = {
          nota_seguimiento: "",
        };
      } catch (error) {
        console.log(error);
      }
    },
    async AgregarComentarioACotizacion(item) {
      try {
        let { data } = await axios.post("/api/add-nota-seguimiento-cotizacion", {
          model: this.add_comentario_cotizacion,
          cotizacion: item,
        });
        item.has_onw_note.push(this.add_comentario_cotizacion);
        this.add_comentario_cotizacion = {
          nota_seguimiento: "",
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
