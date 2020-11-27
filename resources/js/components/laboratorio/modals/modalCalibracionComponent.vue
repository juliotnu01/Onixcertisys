<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="openDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-container>
                <v-row v-if="Object.entries(this.partida).length > 0">
                    <v-col cols="12" xs="12" sm="12" md="7" lg="7">
                        <v-row>
                            <v-col cols="12" xs="12" sm="12" md="4" lg="3">
                                <v-text-field v-model="partida.has_recibo.id" outlined label="Recibo" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="4" lg="3">
                                <v-text-field v-model="partida.id" outlined label="Partida" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="4" lg="6">
                                <v-text-field v-model="partida.has_intrumento.nombre" outlined label="Instrumento" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-text-field v-if="partida.has_calibracion" v-model="partida.has_calibracion.fecha_inicio_calibracion.substr(0,10)" outlined label="Inicia la Calibracion" disabled />
                                <v-text-field v-else v-model="fechaIniciaCalibracion" outlined label="Inicia la Calibracion" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-text-field v-if="partida.has_calibracion" v-model="partida.has_calibracion.fecha_terminacion_calibracion" outlined label="Termina la Calibracion" disabled />
                                <v-text-field v-else v-model="terminaCalibracion" outlined label="Termina la Calibracion" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-text-field v-model="partida.vigencia" outlined label="Vigencia" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-text-field v-model="partida.vigencia" outlined label="Vencimiento" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-autocomplete v-if="partida.has_calibracion" v-model="partida.has_calibracion.tipo_de_calibracion" :items="item_tipo_de_calibracion" item-text="name" return-object outlined label="Tipo de calibracion" clearable />
                                <v-autocomplete v-else v-model="TipocalibracionSelected" :items="item_tipo_de_calibracion" item-text="name" return-object outlined label="Tipo de calibracion" clearable />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-autocomplete v-if="partida.has_calibracion" v-model="partida.has_calibracion.patron_de_calibracion" :items="patrones" item-text="nombre" return-object outlined label="Patron a utilizar" clearable />
                                <v-autocomplete v-else v-model="patronSelected" :items="patrones" item-text="nombre" return-object outlined label="Patron a utilizar" clearable />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-autocomplete v-if="partida.has_calibracion" v-model="partida.has_calibracion.procedimiento_de_calibracion" :items="procedimientos" item-text="nombre" return-object outlined label="Procedimiento a utilizar" clearable />
                                <v-autocomplete v-else v-model="procedimientoSelected" :items="procedimientos" item-text="nombre" return-object outlined label="Procedimiento a utilizar" clearable />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-menu v-if="partida.has_calibracion" ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="dateFormatted" label="Fecha de anomalia" outlined prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)" v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="partida.has_calibracion.fecha_anomalia.substr(0, 10)" no-title @input="menu1 = false"></v-date-picker>
                                </v-menu>
                                <v-menu v-else ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="dateFormatted" label="Fecha de anomalia" outlined prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)" v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="5" lg="5">
                        <v-row>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field v-model="partida.has_recibo.has_cotizaicon.has_cliente.razon_social" outlined label="Cliente" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-text-field v-model="partida.tipo" outlined label="Tipo de servicio" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <v-btn color="primary" link :href="partida.ruta_doc_calibracion" target="_blank" block large class="mt-1">Documento de calibracion</v-btn>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-btn color="info" block @click="IniciarCalibracion">
                                    <v-icon>mdi-clock-start</v-icon>
                                    Iniciar calibracion
                                </v-btn>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                <v-btn color="warning" block @click="terminarCalibracion(partida)">
                                    <v-icon>mdi-content-save</v-icon>
                                    finalizar calibracion
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                        <v-textarea v-if="partida.has_calibracion" outlined name="input-7-4" label="Decripcion de la anomalia" v-model="partida.has_calibracion.descripcion_anomalia" />
                        <v-textarea v-else outlined name="input-7-4" label="Decripcion de la anomalia" v-model="descripcion_anomalia" />
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                        <v-textarea v-if="partida.has_calibracion" outlined name="input-7-4" label="Observacion del tecnico" v-model="partida.has_calibracion.observacion_tecnico" />
                        <v-textarea v-else outlined name="input-7-4" label="Observacion del tecnico" v-model="observacion_de_tecnico" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
    <modal-realizacion-calibracion/>
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import modalRealizacionCalibracion from './modalRealizacionCalibracion.vue'
export default {
    components:{
        'modal-realizacion-calibracion': modalRealizacionCalibracion
    },
    data() {
        return {
            patronSelected: '',
            procedimientoSelected: '',
            menu1: false,
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
            item_tipo_de_calibracion: [{
                    name: 'En laboratrio',
                    value: 1
                },
                {
                    name: 'En campo',
                    value: 2
                },
            ],
            TipocalibracionSelected: {},
            descripcion_anomalia: '',
            observacion_de_tecnico: '',
            fechaIniciaCalibracion: '',
            terminaCalibracion: ''
        };
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_calibracion",
            "recibo_print",
            "partida",
            'patrones',
            'procedimientos',
        ]),
        computedDateFormatted() {
            return this.formatDate(this.date)
        },
        openDialog: {
            get() {
                return this.dialog_calibracion;
            },
            set(val) {
                this.$store.commit("setDialogCalibracion", val);
            },
        },
    },
    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    async mounted() {
        await this.services.patronServices.getlistPatrones()
        await this.services.procedimientoServices.getlistProcedimientos()

    },
    methods: {
        async IniciarCalibracion() {
            try {
                this.$store.commit("setDialogRealizacionCalibracion", true);
                this.$store.commit("setPartidaParaCalibrar", this.partida);
                // var model = {
                //     tipo_de_calibracion: this.TipocalibracionSelected,
                //     patron_de_calibracion: this.patronSelected,
                //     procedimiento_de_calibracion: this.procedimientoSelected,
                //     fecha_anomalia: this.date,
                //     descripcion_anomalia: this.descripcion_anomalia,
                //     observacion_tecnico: this.observacion_de_tecnico,
                //     id_partida: this.partida.id
                // }
                // await this.services.calibracionServices.agregarCalibracion(model)
                // await this.services.partidaServices.getlistpartidasParaCalibrar()
            } catch (e) {
                console.log(e)
            }
        },
        async terminarCalibracion(calibracion) {
            try {
                var model = {
                    id_calibracion: calibracion.has_calibracion.id,
                    partida: calibracion

                }
                await this.services.calibracionServices.terminarCalibracion(model)
                await this.services.partidaServices.getlistpartidasParaCalibrar()

            } catch (e) {
                console.log(e)
            }
        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    },
};
</script>
