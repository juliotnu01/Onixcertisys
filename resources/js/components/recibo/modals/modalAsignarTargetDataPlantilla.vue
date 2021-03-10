<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="openDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-text-field label="Descripcion" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-text-field label="Celda" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-autocomplete
                :items="Object.entries(partida_tecnico)"
                outlined
                dense
                chips
                small-chips
                label="Data"
                return-data
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "services",
      "dialog_asignar_target_data_plantilla",
      "partida_tecnico",
      "plantilla",
    ]),
    data_target_plantilla() {
      return JSON.parse(this.plantilla.configuracion_documento);
    },
    openDialog: {
      get() {
        return this.dialog_asignar_target_data_plantilla;
      },
      set(val) {
        this.$store.commit("setDialogTargetDataPlantilla", val);
      },
    },
  },
  async mounted() {},
  methods: {},
};
</script>
