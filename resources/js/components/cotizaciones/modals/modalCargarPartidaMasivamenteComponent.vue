<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="2556" min-width="2556" scrollable>
        <v-card class="mx-auto" max-width="2556" width="2556">
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="openDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-file-input v-model="files" dense color="deep-purple accent-4" label="" placeholder="Seleccione un documento excel" prepend-icon="mdi-paperclip" outlined :show-size="1000" class="mt-5">
                    <template v-slot:selection="{ index, text }">
                        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                            {{ text }}
                        </v-chip>
                    </template>
                </v-file-input>
                <v-btn text dark @click.prevent="importarPartidas" tile>
                    <v-icon>mdi-file-upload</v-icon> importar
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-simple-table dense>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">Identificacion</th>
                                <th class="text-center">Instrumento</th>
                                <th class="text-center">Alcance</th>
                                <th class="text-center">Acreditacion</th>
                                <th class="text-center">Magnitud</th>
                                <th class="text-center">Marca</th>
                                <th class="text-center">Modelo</th>
                                <th class="text-center">Serie</th>
                                <th class="text-center">cantidad</th>
                                <th class="text-center">Precio Unitario</th>
                                <th class="text-center">Servicio </th>
                                <th class="text-center">Unidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in masivPartidas" :key="item.id">
                                <td class="text-center">{{ item.identificacion }}</td>
                                <td class="text-center">
                                    {{ item.has_instrumento.nombre }}
                                </td>
                                <td class="text-center">
                                    {{ item.has_instrumento.alcance }}
                                </td>
                                <td class="text-center">
                                    <v-autocomplete v-model="item.acreditacion" :items="acreditaciones" outlined dense item-text="nombre" return-object></v-autocomplete>
                                </td>
                                <td class="text-center">
                                    <v-autocomplete v-model="item.magnitud" :items="magnitudes" outlined dense item-text="nombre" return-object></v-autocomplete>
                                </td>
                                <td class="text-center">{{ item.marca }}</td>
                                <td class="text-center">{{ item.modelo }}</td>
                                <td class="text-center">{{ item.serie }}</td>
                                <td class="text-center">
                                    <v-text-field small dense label="label" outlined v-model="item.cantidad"></v-text-field>
                                </td>
                                <td class="text-center">
                                    <v-text-field small dense label="label" outlined v-model="item.has_instrumento.precio_venta" />
                                </td>
                                <td class="text-center">
                                    <v-select small dense :items="servicio_partida" v-model="item.servicio" label="Servicio" item-text="name" return-object outlined />
                                </td>
                                <td class="text-center">
                                    <v-select small dense :items="unidad_partida" v-model="item.unidad" label="Unidad" item-text="name" return-object outlined />
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
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
            files: null,
            servicio_partida: [{
                    name: "Calibracion",
                    value: 1,
                },
                {
                    name: "Reparacion",
                    value: 2,
                },
                {
                    name: "Garantia",
                    value: 3,
                },
                {
                    name: "Venta",
                    value: 4,
                },
            ],
            unidad_partida: [{
                    name: "servicio",
                    Value: 1,
                },
                {
                    name: "Pieza",
                    Value: 2,
                },
                {
                    name: "Juego",
                    Value: 3,
                },
            ],
        };
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_cargar_partidas_masivamente",
            "masivPartidas",
            "instrumentos",
            "acreditaciones",
            "magnitudes",
        ]),
        openDialog: {
            get() {
                return this.dialog_cargar_partidas_masivamente;
            },
            set(val) {
                this.$store.commit("setDialogCargarPartidaMasivamente", val);
            },
        },
    },
    async mounted() {
        this.services.instrumentoServices.getlistInstrumentos();
        this.services.magnitudesServices.getListMagnitudes();
        this.services.acreditacionesServices.getlistAcreditaciones();
    },
    methods: {
        async importarPartidas() {
            try {
                var formData = new FormData();
                formData.append("excel", this.files);
                let {
                    data
                } = await axios.post('/api/importar-partidas', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.services.cotizacionServices.getMasivPartidas();
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
