<template>
  <v-app>
    <v-dialog v-model="openDialog" width="1024">
      <v-card>
        <v-card-title>Asigar Tecnico</v-card-title>
        <v-container>
          <v-row v-if="Object.entries(this.partida_tecnico).length > 0">
            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
              <v-text-field
                disabled
                outlined
                label="Orden de servicio"
                v-model="partida_tecnico.recibo_id"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
              <v-text-field
                disabled
                outlined
                label="Folio"
                v-model="partida_tecnico.cotizacion_id"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
              <v-text-field
                disabled
                outlined
                label="Partida"
                v-model="partida_tecnico.id"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Identificacion"
                v-model="partida_tecnico.identificacion"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Informe id"
                v-model="partida_tecnico.informe_id"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="servicio"
                v-model="partida_tecnico.servicio"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Instrumento"
                v-model="partida_tecnico.has_intrumento.nombre"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Acreditacion"
                v-model="partida_tecnico.has_intrumento.has_acreditacion.nombre"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Magnitud"
                v-model="partida_tecnico.has_intrumento.has_magnitud.nombre"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Alcance"
                v-model="partida_tecnico.has_intrumento.alcance"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Marca"
                v-model="partida_tecnico.marca"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Modelo"
                v-model="partida_tecnico.modelo"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Serie"
                v-model="partida_tecnico.serie"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="Cantidad"
                v-model="partida_tecnico.cantidad"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                disabled
                outlined
                label="vigencia"
                v-model="partida_tecnico.vigencia"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
              <v-autocomplete
                v-model="partida_tecnico.has_intrumento.belongs_documento"
                :items="documentos"
                outlined
                dense
                label="Seleccionar documento"
                item-text="nombre_documento"
                item-value="id"
                return-object
                @change="configRuta(documento_selected)"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
              <v-autocomplete
                v-model="partida_tecnico.has_empleado"
                item-text="nombre_completo"
                return
                return-object
                :items="empleados"
                outlined
                label="Seleccionar Tecnico"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary" @click="AsignarTecnico" :loading="loading_asignar_tecnico"> Asignar Tecnico </v-btn>
          <v-btn text color="error" @click="openDialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <modal-config-data-target-plantilla/>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalconfigPlantillacomponent from './modalAsignarTargetDataPlantilla.vue'
export default {
  components:{
    'modal-config-data-target-plantilla': modalconfigPlantillacomponent
  },
  data() {
    return {
      documento_selected: {},
      item_Tipo_documento_para_subir: [
        {
          name: "Cargar Documento",
          value: 1,
          file: {},
        },
        {
          name: "Colocar enlace directo al documento",
          value: 2,
          file: {},
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["services", "dialog_asignar_tecnico", "partida_tecnico", "empleados", "documentos", "loading_asignar_tecnico"]),
    openDialog: {
      get() {
        return this.dialog_asignar_tecnico;
      },
      set(val) {
        this.$store.commit("setDialogAsignarTecnico", val);
      },
    },
  },
  mounted() {
    this.services.empleadoServices.getlistEmpleados();
    this.services.documentoServices.getlistDocumento();
  },
  methods: {
    async AsignarTecnico() {
      await this.services.empleadoServices.AsignarTecnico(
        this.partida_tecnico,
        this.documento_selected
      );
    },
    configRuta(){

    }
  },
};
</script>
