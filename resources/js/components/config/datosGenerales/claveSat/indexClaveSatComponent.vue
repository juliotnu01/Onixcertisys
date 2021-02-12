<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Clave Sat</v-card-title>
      <v-toolbar flat color="white">
        <v-text-field
          label="Buscar Unidades"
          placeholder=""
          v-model="search_und"
          outlined
          small
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          @click="$store.commit('setDialogAddClaveSat', true)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-data-table
        :headers="headers_tde"
        :items="clavesSat"
        :search="search_und"
        class="elevation-3"
      >
        <template v-slot:item.accion="{ item }">
          <td class="text-center">
            <v-btn icon color="red" small @click="eliminarUnidad(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon color="warning" small @click="EditUnidad(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
        <template v-slot:item.created_at="{ item }">
          <td class="text-center">
            {{ item.created_at.substr(0, 10) }}
          </td>
        </template>
      </v-data-table>
    </v-card>
    <modal-add />
    <modal-edit />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import addClaveSatComponent from "./modals/modalAddClaveSatComponent.vue";
import editClaveSatComponent from "./modals/modalEditClaveSatComponent.vue";
export default {
  components: {
    "modal-add": addClaveSatComponent,
    "modal-edit": editClaveSatComponent,
  },
  data() {
    return {
      headers_tde: [
        { text: "ID", align: "center", sortable: false, sortable: true, value: "id" },
        { text: "Codigo", align: "center", sortable: false, value: "codigo" },
        { text: "descripcion", align: "center", sortable: false, value: "descripcion" },
        { text: "Accion", align: "center", sortable: false, value: "accion" },
      ],
      search_und: "",
    };
  },
  computed: {
    ...mapGetters(["services", "clavesSat"]),
  },
  mounted() {
    this.services.claveSatServices.getclavesSat();
  },
  methods: {
    async EditUnidad(unid) {
      this.$store.commit("setClaveSat", unid);
      this.$store.commit("setDialogEditClaveSat", true);
    },
    async eliminarUnidad(unid) {
      this.services.claveSatServices.eliminarClaveSat(unid);
      this.services.claveSatServices.getclavesSat();
    },
  },
};
</script>
