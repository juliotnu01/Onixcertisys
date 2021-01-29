<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="openDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-sheet>
        <v-row>
          <v-col
            xs="12"
            sm="12"
            md="12"
            lg="12"
            v-for="(i, n) in cotizacion.has_nota_de_seguimiento"
            :key="n"
          >
            <v-card class="m-5 elevation-2">
              <v-card-text>
                {{ i.nota_seguimiento }}
                <v-divider></v-divider>
              </v-card-text>
              <div class="text-right p-5">
                <span v-for="(sc, x) in i.has_onw_note" :key="x">
                  {{ sc.nota_seguimiento }}
                  <v-divider></v-divider>
                </span>
              </div>
              <v-card-actions>
                <v-row>
                  <v-col xs="12" sm="12" md="2" lg="2">
                    <v-btn color="primary" @click="AgregarComentarioACotizacion(i)"
                      >Agregar comentario</v-btn
                    >
                  </v-col>
                  <v-col xs="12" sm="12" md="10" lg="10">
                    <v-text-field
                      name="name"
                      label="Escribe un comentario para el seguimiento de la cotizacion"
                      id="id"
                      outlined
                      v-model="add_comentario_cotizacion.nota_seguimiento"
                    />
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            md="12"
            lg="12"
            v-for="(i, n) in var_instrumento_selected.has_nota_de_seguimiento"
            :key="n"
          >
            <v-card class="m-5 elevation-2">
              <v-card-text>
                {{ i.nota_seguimiento }}
                <v-divider></v-divider>
              </v-card-text>
              <div class="text-right p-5">
                <span v-for="(sc, x) in i.has_onw_note" :key="x">
                  {{ sc.nota_seguimiento }}<br />
                  <v-divider></v-divider>
                </span>
              </div>
              <v-card-actions>
                <v-row>
                  <v-col xs="12" sm="12" md="10" lg="10">
                    <v-text-field
                      name="name"
                      label="Escribe un comentario para el seguimiento de la calibracion"
                      id="id"
                      outlined
                      v-model="add_comentario_cotizacion.nota_seguimiento"
                    />
                  </v-col>
                  <v-col xs="12" sm="12" md="2" lg="2">
                    <v-btn color="primary" @click="AgregarComentarioACalibracion(i)"
                      >Agregar comentario</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12">
            <v-card class="mx-auto p-5">
              <v-row>
                <v-col xs="12" sm="12" md="12" lg="12">
                  <v-row>
                    <v-col xs="12" sm="12" md="8" lg="8">
                      <v-textarea
                        outlined
                        label="Escribe un comentario"
                        v-model="model_inicio_cotizacion.nota_seguimiento"
                      />
                    </v-col>
                    <v-col xs="12" sm="12" md="4" lg="4">
                      <v-autocomplete
                        v-model="var_instrumento_selected"
                        :items="cotizacion.has_partidas"
                        outlined
                        chips
                        label="Seleccionar Instrumento"
                        return-object
                      >
                        <template v-slot:selection="data">
                          {{ data.item.has_intrumento.nombre }}
                        </template>
                        <template v-slot:item="data">
                          {{ data.item.has_intrumento.nombre }}
                        </template>
                      </v-autocomplete>
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-col xs="12" sm="12" md="12" lg="12">
                          <v-btn
                            color="success"
                            block
                            @click="iniciarNotaSeguimientoCalibracion"
                            >Inicar Seguimiento del instrumento</v-btn
                          >
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col xs="12" sm="12" md="12" lg="12">
                          <v-btn
                            color="warning"
                            block
                            @click="iniciarNotaSeguimientoCotizacion"
                            >Inicar Seguimiento de la cotizacion
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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
