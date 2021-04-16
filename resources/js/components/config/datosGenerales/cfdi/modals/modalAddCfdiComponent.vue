<template>
  <v-app>
    <v-dialog v-model="openDialog" width="400">
      <v-card>
        <v-card-title>Agregar CFDI</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_tde">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Codigo"
                    outlined
                    v-model="model.codigo_cfdi"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Descripcion"
                    outlined
                    v-model="model.descripcion_cfdi"
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
    <!-- <notificacion /> -->
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
// import notificacionComponent from "../../../../notificacion/indexComponentNotificacion.vue";
export default {
  components: {
  },
  data() {
    return {
      model: {
        codigo_cfdi: "",
        descripcion_cfdi: "",
      },
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_cfdi"]),
    openDialog: {
      get() {
        return this.dialog_add_cfdi;
      },
      set(val) {
        this.$store.commit("setDialogAddCFDI", val);
      },
    },
  },
  mounted() {},
  methods: {
    async addClaveSat() {
      await this.services.cfdiServices.addCFDI(this.model);
      await this.services.cfdiServices.getCFDIs();
      this.model = {
        codigo_cfdi: "",
        descripcion_cfdi: "",
      };
    },
  },
};
</script>
