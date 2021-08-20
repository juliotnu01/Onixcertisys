<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Magnitudes</v-card-title>
      <v-container>
        <v-toolbar flat color="white">
          <v-text-field
            label="Buscar magnitud"
            placeholder=""
            v-model="search_mag"
            outlined
            small
          ></v-text-field>
          <v-spacer></v-spacer>

          <v-file-input
            v-model="files"
            color="deep-purple accent-4"
            counter
            label=""
            multiple
            placeholder="Seleccionar Documento"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
          <v-btn
            fab
            dark
            color="primary"
            @click="cargarDocumentoMagnitudes"
            class="mb-10"
            :loading="loadingUpload"
          >
            <v-icon dark>mdi-upload</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
             class="mb-10"
            fab
            dark
            color="primary"
            @click="$store.commit('setDialogAddMagnitudes', true)"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-data-table
          :headers="headers_rol"
          :items="magnitudes"
          :search="search_mag"
          class="elevation-3"
        >
          <template v-slot:item.accion="{ item }">
            <td class="text-center">
              <v-btn icon color="red" small @click="eliminarMagnitud(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn icon color="warning" small @click="editarMagnitud(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
          </template>
          <template v-slot:item.created_at="{ item }">
            <td class="text-center">
              {{ item.created_at }}
            </td>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
    <modal-add />
    <modal-edit />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import modalAddMagnitudesComponent from "./modals/modalAddmagnitudesComponent.vue";
import modalEditMagnitudesComponent from "./modals/modalEditarMagnitudesComponent.vue";
export default {
  components: {
    "modal-add": modalAddMagnitudesComponent,
    "modal-edit": modalEditMagnitudesComponent,
  },
  data() {
    return {
      headers_rol: [
        { text: "ID", align: "end", sortable: false, sortable: true, value: "id" },
        { text: "Clave", align: "center", sortable: false, value: "clave" },
        { text: "Nombre", align: "center", sortable: false, value: "nombre" },
        { text: "Agregado", align: "center", sortable: false, value: "created_at" },
        { text: "Acción", align: "center", sortable: false, value: "accion" },
      ],
      listRoles: [],
      search_mag: "",
      loadingUpload: false,
      files:[],
    };
  },
  computed: {
    ...mapGetters(["services", "magnitudes"]),
  },
  mounted() {
    this.services.magnitudesServices.getListMagnitudes();
  },
  methods: {
    async editarMagnitud(mag) {
      this.$store.commit("setEditMagnitud", mag);
      this.$store.commit("setDialogEditMagnitudes", true);
    },
    async eliminarMagnitud(mag) {
      await this.services.magnitudesServices.eliminarMagnitud(mag);
      await this.services.magnitudesServices.getListMagnitudes();
    },
    async cargarDocumentoMagnitudes(){
        try {
              this.loadingUpload = true
              await this.services.magnitudesServices.agregarMagnitudesMasivamente(this.files[0]);
              await this.services.magnitudesServices.getListMagnitudes();
              this.loadingUpload = false
              this.files = []
        } catch (error) {
            console.log(error)
            this.loadingUpload = false
        }
    }
  },
};
</script>
