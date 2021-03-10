<template>
  <v-app>
    <v-dialog v-model="openDialog" width="1240">
      <v-card>
        <v-card-title>Agregar Documento</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_mag">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-file-input
                    v-model="file"
                    color="deep-purple accent-4"
                    counter
                    label="Documento"
                    placeholder="Seleccionar Documento"
                    prepend-icon="mdi-paperclip"
                    outlined
                  >
                  </v-file-input>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="9" lg="9">
                  <v-text-field
                    label="Descripcion"
                    outlined
                    v-model="model_config_data_documento.descripcion"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="1" lg="1">
                  <v-text-field
                    label="Celda"
                    outlined
                    v-model="model_config_data_documento.celda"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="1" lg="1">
                  <v-btn class="mx-2" fab dark color="primary" @click="addConfigDocument">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12"  v-for="(item, i) in data_confing_file" :key="i" >
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="9" lg="9">
                      <v-text-field name="name" label="label" id="id" outlined  v-model="item.descripcion" />
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                      <v-text-field name="name" label="label" id="id" outlined  v-model="item.target_cell"  />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="addDocument"> Agregar </v-btn>
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
    return {
      file: {},
      rules: {
        required: (value) => !!value || "Este campo es requerido.",
      },
      model_config_data_documento: {
        descripcion: "",
        celda: "",
      },
      data_confing_file: {},
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_documento"]),
    openDialog: {
      get() {
        return this.dialog_add_documento;
      },
      set(val) {
        this.$store.commit("setDialogAddDocumento", val);
      },
    },
  },
  mounted() {},
  methods: {
    async addConfigDocument() {
      let data = {
        target_cell: this.model_config_data_documento.celda,
        descripcion: this.model_config_data_documento.descripcion,
        storage_data: "",
      };

      this.data_confing_file[this.model_config_data_documento.celda] = data;

      this.model_config_data_documento = {
        descripcion: "",
        celda: "",
      };
    },
    async addDocument() {
      try {
          var formData = new FormData();
           formData.append('documento', this.file)
           formData.append('data_config', JSON.stringify(this.data_confing_file))
        await this.services.documentoServices.addDocumentConfig(formData)
        await this.services.documentoServices.getlistDocumento();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
