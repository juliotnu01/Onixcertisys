<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
        <v-card>
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
                                <!-- TODO: generar fecha cuando inicia la calibracion -->
                                <v-text-field v-model="partida.created_at.substr(0, 10)" outlined label="Inicia la Calibracion" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <!-- TODO: generar fecha cuando temina la calibracion -->
                                <v-text-field v-model="partida.created_at.substr(0, 10)" outlined label="Termina la Calibracion" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <v-text-field v-model="partida.vigencia" outlined label="Vigencia" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                                <!-- TODO: generar fecha de vencimiento -->
                                <v-text-field v-model="partida.vigencia" outlined label="Vencimiento" disabled />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <!-- TODO: generar fecha de vencimiento -->
                                <v-autocomplete v-model="value1" :items="patrones" item-text="nombre" return-object outlined label="Patron a utilizar" clearable />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                <!-- TODO: generar fecha de vencimiento -->
                                <v-autocomplete v-model="value2" :items="procedimientos" item-text="nombre" return-object outlined label="Procedimiento a utilizar" clearable />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                        {{partida.has_recibo.has_cotizaicon.has_cliente}}
                    </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-btn @click="openDialog = false"> Cerrar </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {
    data() {
        return {
            value1: '',
            value2: '',
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
        openDialog: {
            get() {
                return this.dialog_calibracion;
            },
            set(val) {
                this.$store.commit("setDialogCalibracion", val);
            },
        },
    },
    async mounted() {
        await this.services.patronServices.getlistPatrones()
        await this.services.procedimientoServices.getlistProcedimientos()
    },
    methods: {},
};
</script>
