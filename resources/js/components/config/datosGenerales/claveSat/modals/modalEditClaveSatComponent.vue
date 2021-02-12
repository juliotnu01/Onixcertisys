<template>
  <v-app>
    <v-dialog v-model="openDialog" width="400">
      <v-card>
        <v-card-title>Editar Clave sat</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_tde">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Codigo"
                    outlined
                    v-model="claveSat.codigo"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Descripcion"
                    outlined
                    v-model="claveSat.descripcion"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="editClaveSat"> Editar </v-btn>
            <v-btn text color="red" @click.prevent="openDialog = false"> Cerrar </v-btn>
          </v-card-actions>
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
    ...mapGetters(["services", "dialog_edit_clave_sat", "claveSat"]),
    openDialog: {
      get() {
        return this.dialog_edit_clave_sat;
      },
      set(val) {
        this.$store.commit("setDialogEditClaveSat", val);
      },
    },
  },
  mounted() {},
  methods: {
    async editClaveSat() {
      await this.services.claveSatServices.actualizarClaveSat(this.claveSat);
      await this.services.claveSatServices.getclavesSat();
    },
  },
};
</script>
