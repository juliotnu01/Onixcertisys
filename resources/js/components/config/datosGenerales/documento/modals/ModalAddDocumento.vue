<template>
  <v-app>
    <v-dialog v-model="openDialog" width="1240">
      <v-card>
        <v-card-title>Agregar Documento</v-card-title>
        <v-container>
          <v-card-text>
            <v-form ref="f_mag">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
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
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateFormatted"
                        label="Fecha de vencimiento de plantilla"
                        append-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                        outlined
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click.prevent="addDocument" :loading="loading" > Agregar </v-btn>
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
      menu1: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      rules: {
        required: (value) => !!value || "Este campo es requerido.",
      },
      model_config_data_documento: {
        descripcion: "",
        celda: "",
      },
      data_confing_file: {},
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_add_documento"]),
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    openDialog: {
      get() {
        return this.dialog_add_documento;
      },
      set(val) {
        this.$store.commit("setDialogAddDocumento", val);
      },
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  mounted() {},
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
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
        this.loading = true
        var formData = new FormData();
        formData.append("documento", this.file);
        formData.append("fecha_vencimiento", this.date);
        await this.services.documentoServices.addDocumentConfig(formData);
        await this.services.documentoServices.getlistDocumento();
        this.loading = false
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
