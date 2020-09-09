<template>
    <v-app>
        <v-dialog v-model="openDialog" width="800">
            <v-card>
                <v-card-title>Agregar Patron</v-card-title>
                <v-container>
                    <v-card-text>
                        <v-form ref="f_tde">
                            <v-row align="center" justify="space-around">
                                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Clave" outlined v-model="model.clave"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="7">
                                    <v-text-field :rules="[rules.required]" label="Nombre" outlined v-model="model.nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                    <v-textarea :rules="[rules.required]"  outlined label="Alcance" v-model="model.alcance"></v-textarea>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-menu v-model="menuFechaInicio1" :close-on-content-click="false" transition="scale-transition">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="model.fecha_calibracion" prepend-icon="mdi-calendar" v-on="on" outlined label="Fecha de Calibracion"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="model.fecha_calibracion" no-title locale="es" @input="menuFechaInicio1 = false" width="370"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-menu v-model="menuFechaInicio2" :close-on-content-click="false" transition="scale-transition">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="model.fecha_vencimiento" prepend-icon="mdi-calendar" v-on="on" outlined label="Fecha de Vencimiento"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="model.fecha_vencimiento" no-title locale="es" @input="menuFechaInicio2 = false" width="370"></v-date-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="blue" @click.prevent="addPatron">
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
                clave: '',
                nombre: '',
                alcance: '',
                fecha_calibracion: momentTz.tz('America/Bogota').format().substr(0, 10),
                fecha_vencimiento: momentTz.tz('America/Bogota').format().substr(0, 10),
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
            'dialog_add_patron'
        ]),
        openDialog: {
            get() {
                return this.dialog_add_patron
            },
            set(val) {
                this.$store.commit('setDialogAddPatron', val)
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
        async addPatron() {
            if (this.$refs.f_tde.validate()) {
                await this.services.patronServices.agregarPatrones(this.model)
                await this.services.patronServices.getlistPatrones()
                this.model = {
	                clave: '',
	                nombre: '',
	                alcance: '',
	                fecha_calibracion: momentTz.tz('America/Bogota').format().substr(0, 10),
	                fecha_vencimiento: momentTz.tz('America/Bogota').format().substr(0, 10),
            	}
            }
        }
    }
};

</script>
