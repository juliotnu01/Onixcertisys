<template>
<v-app>
    <v-card class="p-2">
        <v-card-title>Empleados</v-card-title>
        <v-toolbar flat color="white">
            <v-text-field label="Buscar Empleado" placeholder="" v-model="search_mag" outlined small></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab dark color="primary" @click="$store.commit('setDialogAddEmpleado', true)">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>
        <v-data-table :headers="headers_empleado" :items="empleados" :search="search_mag" class="elevation-3">
            <template v-slot:item.accion="{ item }">
                <td class="text-center">
                    <v-btn icon color="red" small @click="eliminaEmpleado(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon color="warning" small @click="EditEmpleado(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </td>
            </template>
            <template v-slot:item.created_at="{ item }">
                <td class="text-center">
                    {{item.created_at}}
                </td>
            </template>
        </v-data-table>
    </v-card>
    <modal-add />
    <modal-edit />
</v-app>
</template>

<script>
import modalAddEmpleado from './modals/modalAddEmpleadoComponent.vue'
import modalEditEmpleado from './modals/modalEditEmpleadoComponent.vue'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        'modal-add': modalAddEmpleado,
        'modal-edit': modalEditEmpleado,
    },
    data() {
        return {
            headers_empleado: [{
                    text: 'ID',
                    align: 'end',
                    sortable: false,
                    sortable: true,
                    value: 'id'
                },
                {
                    text: 'Fecha de alta',
                    align: 'center',
                    sortable: false,
                    value: 'fecha_de_alta'
                },
                {
                    text: 'Fecha de baja ',
                    align: 'center',
                    sortable: false,
                    value: 'fecha_de_baja'
                },
                {
                    text: 'Status',
                    align: 'center',
                    sortable: false,
                    value: 'status'
                },
                {
                    text: 'Nombre Completo',
                    align: 'center',
                    sortable: false,
                    value: 'nombre_completo'
                },
                {
                    text: 'R.F.C',
                    align: 'center',
                    sortable: false,
                    value: 'rfc'
                },
                {
                    text: 'Dirección',
                    align: 'center',
                    sortable: false,
                    value: 'direccion'
                },
                {
                    text: 'Ciudad',
                    align: 'center',
                    sortable: false,
                    value: 'ciudad'
                },
                {
                    text: 'Departamento',
                    align: 'center',
                    sortable: false,
                    value: 'departamento'
                },
                {
                    text: 'Codigo postal',
                    align: 'center',
                    sortable: false,
                    value: 'codigo_postal'
                },
                {
                    text: 'Telefono',
                    align: 'center',
                    sortable: false,
                    value: 'telefono'
                },
                {
                    text: 'Correo Factura',
                    align: 'center',
                    sortable: false,
                    value: 'correo_factura'
                },
                {
                    text: 'Observaciones',
                    align: 'center',
                    sortable: false,
                    value: 'observaciones'
                },
                {
                    text: 'Agregado',
                    align: 'center',
                    sortable: false,
                    value: 'created_at'
                },
                {
                    text: 'Acción',
                    align: 'center',
                    sortable: false,
                    value: 'accion'
                }
            ],
            search_mag: '',
        }
    },
    computed: {
        ...mapGetters(['services', 'empleados']),
    },
    mounted() {
        this.services.empleadoServices.getlistEmpleados()
    },
    methods: {
        async EditEmpleado(emp) {
            this.$store.commit('setDialogEditEmpleado', true)
            this.$store.commit('setEmpleado', emp)
        },
        async eliminaEmpleado(emp) {

            this.services.empleadoServices.EliminarAcreditaciones(emp)
            this.services.empleadoServices.getlistEmpleados()
        }
    }
}
</script>
