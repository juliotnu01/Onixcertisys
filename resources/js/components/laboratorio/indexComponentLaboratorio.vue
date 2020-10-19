<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="partidas"
      :items-per-page="5"
      class="elevation-1">
        <template v-slot:item.accion="{item}" >
          <td class="text-center" >
            <v-btn icon  color="primary"  @click="Calibrar(item)" >
              <v-icon>mdi-crosshairs-gps</v-icon>
            </v-btn>
          </td>
        </template>
    </v-data-table>
    <modal-calibracion />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import modalCalibracion from './modals/modalCalibracionComponent.vue'
export default {
  components: {
    'modal-calibracion': modalCalibracion
  },
  data() {
    return {
      headers: [
        {
          text: "Recibo",
          align: "center",
          sortable: true,
          value: "has_recibo.id",
        },
        {
          text: "Informe",
          align: "center",
          sortable: true,
          value: "informe_id",
        },
        {
          text: "Instrumento",
          align: "center",
          sortable: true,
          value: "has_intrumento.nombre",
        },
         {
          text: "Cliente",
          align: "center",
          sortable: true,
          value: "has_recibo.has_cotizaicon.has_cliente.razon_social",
        },
         {
          text: "Magnitud",
          align: "center",
          sortable: true,
          value: "has_intrumento.has_magnitud.nombre",
        },
          {
          text: "Tenico",
          align: "center",
          sortable: true,
          value: "has_tecnico.nombre_completo",
        },
          {
          text: "Accion",
          align: "center",
          sortable: false,
          value: "accion",
        }
      ],
    };
  },
  computed:{
    ...mapGetters(['services', 'partidas']),

  },
  async mounted(){
    await this.services.partidaServices.getlistpartidas()
    console.log({partidas:this.partidas})
  },
  methods:{
    Calibrar(item){
      console.log({item})
      this.$store.commit('setDialogCalibracion', true)
      this.$store.commit('setPartida', item)
    }
  }
};
</script>
