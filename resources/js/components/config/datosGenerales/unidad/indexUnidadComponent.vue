<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Unidades</v-card-title>
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
          @click="$store.commit('setDialogAddUnidad', true)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-data-table
        :headers="headers_tde"
        :items="unidades"
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
import addUnidadComponent from "./modals/modalAddUnidadComponent.vue";
import editUnidadComponent from "./modals/modalEditUnidadComponent.vue";
export default {
  components: {
    "modal-add": addUnidadComponent,
    "modal-edit": editUnidadComponent,
  },
  data() {
    return {
      headers_tde: [
        { text: "ID", align: "center", sortable: false, sortable: true, value: "id" },
        { text: "Tipo", align: "center", sortable: false, value: "tipo" },
        { text: "Clave", align: "center", sortable: false, value: "clave" },
        { text: "Nombre", align: "center", sortable: false, value: "nombre" },
        { text: "Accion", align: "center", sortable: false, value: "accion" },
      ],
      listRoles: [],
      search_und: "",
    };
  },
  computed: {
    ...mapGetters(["services", "unidades"]),
  },
  mounted() {
    this.services.unidadServices.getUnidades();
  },
  methods: {
    async EditUnidad(unid) {
      this.$store.commit("setUnidad", unid);
      this.$store.commit("setDialogEditUnidad", true);
    },
    async eliminarUnidad(unid) {
      this.services.unidadServices.EliminarUnidad(unid);
      this.services.unidadServices.getUnidades();
    },
  },
};
</script>
