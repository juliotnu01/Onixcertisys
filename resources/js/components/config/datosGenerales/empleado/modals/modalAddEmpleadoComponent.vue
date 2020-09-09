<template>
    <v-app>
        <v-dialog v-model="openDialog" width="800">
            <v-card>
                <v-card-title>Agregar Empleado</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_tde">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                                    <v-menu v-model="menuFechaInicio1" :close-on-content-click="false" transition="scale-transition">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="dateFormatted1" prepend-icon="mdi-calendar" v-on="on" outlined label="Fecha de Alta"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="model.fecha_de_alta" no-title locale="es" @input="menuFechaInicio1 = false" width="350"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                                    <v-menu v-model="menuFechaInicio2" :close-on-content-click="false" transition="scale-transition">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="dateFormatted2" prepend-icon="mdi-calendar" v-on="on" outlined label="Fecha de Baja"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="model.fecha_de_baja" no-title locale="es" @input="menuFechaInicio2 = false" width="350"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                                    <v-select :items="item_status_emplado" label="Status" outlined item-text="name" return-object v-model="model.status"></v-select>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Nombre Completo" outlined v-model="model.nombre_completo"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="R.F.C" outlined v-model="model.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Dirección" outlined v-model="model.direccion"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field :rules="[rules.required]" label="Ciudad" outlined v-model="model.ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field :rules="[rules.required]" label="Departamento" outlined v-model="model.departamento"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field :rules="[rules.required]" label="Codigo Postal" outlined v-model="model.codigo_postal"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                    <v-text-field :rules="[rules.required]" label="Teléfono" outlined v-model="model.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Correo electronico para la factura" outlined v-model="model.correo_factura"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-textarea outlined label="Observaciones" v-model="model.observaciones"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addEmpleado">
                            Agregar
                        </v-btn>
                        <v-btn text color="red" @click.prevent="openDialog = false">
                            Cerrar
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment';
import momentTz from 'moment-timezone';
export default {
    data() {
        return {
            rules: {
                required: value => !!value || 'Este campo es requerido.',
            },
            model: {
                fecha_de_alta: momentTz.tz('America/Bogota').format().substr(0, 10),
                fecha_de_baja: momentTz.tz('America/Bogota').format().substr(0, 10),
                status: '',
                nombre_completo: '',
                rfc: '',
                direccion: '',
                ciudad: '',
                codigo_postal: '',
                telefono: '',
                correo_factura: '',
                departamento: '',
                observaciones: '',
            },
            dateFormatted1: this.formatDate(momentTz.tz('America/Bogota').format().substr(0, 10)),
            dateFormatted2: this.formatDate(momentTz.tz('America/Bogota').format().substr(0, 10)),
            menuFechaInicio1: false,
            menuFechaInicio2: false,
            item_status_emplado: [
                { name: 'Activo', value: 1 },
                { name: 'Bloquedo', value: 0 }

            ]
        }
    },
    watch: {
        date1(val) {
            this.dateFormatted1 = this.formatDate(this.date1)
        },
        date2(val) {
            this.dateFormatted2 = this.formatDate(this.date2)
        },
    },
    computed: {
        ...mapGetters([
            'services',
            'dialog_add_empleados'
        ]),
        openDialog: {
            get() {
                return this.dialog_add_empleados
            },
            set(val) {
                this.$store.commit('setDialogAddEmpleado', val)
            }
        }

    },
    mounted() {},
    methods: {
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        async addEmpleado() {
            if (this.$refs.f_tde.validate()) {
                await this.services.empleadoServices.agregarEmpleado(this.model)
                await this.services.empleadoServices.getlistEmpleados()
                this.model = {
                    fecha_de_alta: momentTz.tz('America/Bogota').format().substr(0, 10),
                    fecha_de_baja: momentTz.tz('America/Bogota').format().substr(0, 10),
                    status: '',
                    nombre_completo: '',
                    rfc: '',
                    direccion: '',
                    ciudad: '',
                    codigo_postal: '',
                    telefono: '',
                    correo_factura: '',
                    departamento: '',
                    observaciones: '',
                }
            }
        }
    }
};

</script>
