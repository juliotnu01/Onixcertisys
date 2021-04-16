<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>C.F.D.I.</v-card-title>
      <v-toolbar flat color="white">
        <v-text-field
          label="Buscar CFDI"
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
          @click="$store.commit('setDialogAddCFDI', true)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-data-table
        :headers="headers_tde"
        :items="cfdis"
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
    <!-- <modal-edit /> -->
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import addCFDIComponent from './modals/modalAddCfdiComponent.vue';
import editCFDIComponent from './modals/modalEditCfdiComponent';
export default {
  components: {
      "modal-add":addCFDIComponent,
      "modal-edit":editCFDIComponent
  },
  data() {
    return {
      headers_tde: [
        { text: "ID", align: "center", sortable: false, sortable: true, value: "id" },
        { text: "Codigo", align: "center", sortable: false, value: "codigo_cfdi" },
        { text: "descripcion", align: "center", sortable: false, value: "descripcion_cfdi" },
        { text: "Accion", align: "center", sortable: false, value: "accion" },
      ],
      search_und: "",
    };
  },
  computed: {
    ...mapGetters(["services", "cfdis"]),
  },
  mounted() {
    this.services.cfdiServices.getCFDIs();
  },
  methods: {
    async EditUnidad(unid) {
      this.$store.commit("setCfdi", unid);
      this.$store.commit("setDialogEditCfdi", true);
    },
    async eliminarUnidad(unid) {
      this.services.cfdiServices.deleteCFDI(unid);
      this.services.cfdiServices.getCFDIs();
    },
  },
};
</script>
