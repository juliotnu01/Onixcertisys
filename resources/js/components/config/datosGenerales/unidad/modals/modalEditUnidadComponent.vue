<template>
  <v-app>
    <v-dialog v-model="openDialog" width="400">
      <v-card>
        <v-card-title>Editar Unidad</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_tde">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Nombre"
                    outlined
                    v-model="unidad.nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Clave"
                    outlined
                    v-model="unidad.clave"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="12">
                  <v-text-field
                    label="Tipo"
                    outlined
                    v-model="unidad.tipo"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="addUnidad"> Editar </v-btn>
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
    ...mapGetters(["services", "dialog_edit_unidad", "unidad"]),
    openDialog: {
      get() {
        return this.dialog_edit_unidad;
      },
      set(val) {
        this.$store.commit("setDialogEditUnidad", val);
      },
    },
  },
  mounted() {},
  methods: {
    async addUnidad() {
      await this.services.unidadServices.actualizarUnidad(this.unidad);
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
