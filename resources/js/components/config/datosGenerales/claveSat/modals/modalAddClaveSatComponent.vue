<template>
  <v-app>
    <v-dialog v-model="openDialog" width="400">
      <v-card>
        <v-card-title>Agregar Clave Sat</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_tde">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Codigo"
                    outlined
                    v-model="model.codigo"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Descripcion"
                    outlined
                    v-model="model.descripcion"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="addClaveSat"> Agregar </v-btn>
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
        codigo: "",
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_clave_sat"]),
    openDialog: {
      get() {
        return this.dialog_add_clave_sat;
      },
      set(val) {
        this.$store.commit("setDialogAddClaveSat", val);
      },
    },
  },
  mounted() {},
  methods: {
    async addClaveSat() {
      await this.services.claveSatServices.agregarClaveSat(this.model);
      await this.services.claveSatServices.getclavesSat();
      this.model = {
        codigo: "",
        descripcion: "",
      };
    },
  },
};
</script>
