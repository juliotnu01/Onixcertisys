<template>
  <v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="openDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
              <v-file-input
                v-model="var_calibracion_pdf"
                accept="pdf/*"
                label="Cargar Certificado (.pdf)"
                outlined
                small
                dense
              />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
              <v-btn color="success" block @click="cargarCertificado" >Registrar Certificado</v-btn>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
              <pdf ref="myPdfComponent" :src="urlPdfCalibracion"></pdf>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      var_calibracion_pdf: null,
      urlPdfCalibracion: '',
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_realizacion_calibracion", "partida",]),
    openDialog: {
      get() {
        return this.dialog_realizacion_calibracion;
      },
      set(val) {
        this.$store.commit("setDialogRealizacionCalibracion", val);
      },
    },
  },
  methods: {
    async cargarCertificado() {
      var pdfCalibracion = new FormData();
      pdfCalibracion.append("pdf_calibracion", this.var_calibracion_pdf);
      pdfCalibracion.append("partida", JSON.stringify(this.partida));
      try {
        let {data} = await axios.post(
          "/api/cargar-certificado-partidas",
          pdfCalibracion,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        this.urlPdfCalibracion = data
        await this.services.partidaServices.getlistpartidasParaCalibrar()
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
