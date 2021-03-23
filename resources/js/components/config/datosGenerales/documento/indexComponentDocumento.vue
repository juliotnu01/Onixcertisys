<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Documentos</v-card-title>
        <v-toolbar flat color="white">
          <v-text-field
            label="Buscar documento"
            placeholder=""
            v-model="search"
            outlined
            small
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-2"
            fab
            dark
            color="primary"
            @click="$store.commit('setDialogAddDocumento', true)"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="documentos"
          class="elevation-1"
          :search="search"
        >
          <template v-slot:item.nombre_documento="{ item }">
            <td>
              <a :href="item.ruta_documento">{{ item.nombre_documento }}</a> 
            </td>
          </template>
        </v-data-table>
        <modal-add />
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import modalAddDocumentoComponent from "../documento/modals/ModalAddDocumento.vue";
export default {
  components: {
    "modal-add": modalAddDocumentoComponent,
  },
  data() {
    return {
      headers: [
        { text: "ID", align: "center", sortable: false, value: "id" },
        {
          text: "documento",
          align: "center",
          sortable: false,
          value: "nombre_documento",
        },
        {
          text: "Fecha Vencimiento",
          align: "center",
          sortable: false,
          value: "fecha_vencimiento",
        },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["services", "documentos"]),
    
  },
  async mounted() {
    await this.services.documentoServices.getlistDocumento();
  },
  methods: {
    async editarcondicionDePago(cdp) {},
    async eliminarcondicionDePago(cdp) {},
  },
};
</script>
