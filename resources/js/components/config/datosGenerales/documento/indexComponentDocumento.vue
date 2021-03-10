<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Documentos</v-card-title>
      <v-container>
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
            <template v-slot:item.ruta_documento="{item}" >
                <td><a :href="item.ruta_documento">{{item.ruta_documento}}</a></td>                
            </template> 
         </v-data-table>
        <modal-add/>
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import modalAddDocumentoComponent from '../documento/modals/ModalAddDocumento.vue'
export default {
  components: {
      'modal-add': modalAddDocumentoComponent
  },
  data() {
    return {
      headers: [
        { text: "ID", align: "end", sortable: false, value: "id" },
        { text: "Configuracion Documento", align: "center", sortable: false, value: "configuracion_documento" },
        { text: "Ruta documento", align: "end", sortable: false, value: "ruta_documento" },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["services", "documentos"]),
  },
  async mounted() {
    await this.services.documentoServices.getlistDocumento();
    console.log({docs:this.documentos})
  },
  methods: {
    async editarcondicionDePago(cdp) {
    },
    async eliminarcondicionDePago(cdp) {
    },
  },
};
</script>
