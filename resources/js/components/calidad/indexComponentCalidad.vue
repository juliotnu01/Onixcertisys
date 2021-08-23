<template>
  <v-app>
    <v-card class="p-2">
    <v-card-title primary-title>
        Calidad
    </v-card-title>
      <v-toolbar flat color="white">
        <v-text-field
          label="Buscar"
          placeholder=""
          v-model="search_calidad"
          outlined
          small
        ></v-text-field>
      </v-toolbar>
      <v-data-table
        :headers="headers_calidad"
        :items="calidades"
        :search="search_calidad"
        class="elevation-3"
      >
        <template v-slot:item.accion="{ item }">
          <td class="text-center">
            <v-btn icon color="warning" small @click="$store.commit('setDialogEditCalidad', true)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
        <template v-slot:item.created_at="{ item }">
          <td class="text-center">
            {{ item.created_at.substr(0, 10) }}
          </td>
        </template>
        <template v-slot:item.observacion="{ item }">
          <td class="text-center " style="max-width: 850px; " >
            {{ item.observacion }}
          </td>
        </template>
      </v-data-table>
    </v-card>
        <modal-edit/>
  </v-app>
</template>
<script>
import {mapGetters} from 'vuex';
import ModalEditComponent from "./modals/modalEditCalidad.vue";
export default {
components:{
        'modal-edit': ModalEditComponent
    },
    data(){
        return {
            search_calidad:'',
            headers_calidad:[
                     { text: "Partida id", align: "start",  sortable: false, value: "belongs_to_partida.id" },
                     { text: "Verificado por", align: "start",  sortable: false, value: "belongs_to_empleado.nombre_completo" },
                     { text: "Observacion", align: "start",  sortable: false, value: "observacion"},
                     { text: "Estado", align: "start",  sortable: false, value: "status_calidad"},
                     { text: "accion", align: "start",  sortable: false, value: "accion" }
            ]
        }
    },
    computed:{
        ...mapGetters(['services', 'calidades'])
    },
    mounted(){
        this.services.calidadServices.getListCalidades()
    }
};
</script>
