<template>
  <v-app>
    <v-dialog v-model="openDialog" width="400">
      <v-card>
        <v-card-title>Agregar Unidad</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_tde">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Nombre"
                    outlined
                    v-model="model.nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Clave"
                    outlined
                    v-model="model.clave"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field label="Tipo" outlined v-model="model.tipo"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="addUnidad"> Agregar </v-btn>
            <v-btn text color="red" @click.prevent="openDialog = false"> Cerrar </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
    <notificacion />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import notificacionComponent from "../../../../notificacion/indexComponentNotificacion.vue";
export default {
  components: {
    notificacion: notificacionComponent,
  },
  data() {
    return {
      model: {
        nombre: "",
        clave: "",
        tipo: "",
      },
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_unidad"]),
    openDialog: {
      get() {
        return this.dialog_add_unidad;
      },
      set(val) {
        this.$store.commit("setDialogAddUnidad", val);
      },
    },
  },
  mounted() {},
  methods: {
    async addUnidad() {
      await this.services.unidadServices.agregarUnidad(this.model);
      await this.services.unidadServices.getUnidades();
      this.model = {
        nombre: "",
        clave: "",
        tipo: "",
      };
    },
  },
};
</script>
