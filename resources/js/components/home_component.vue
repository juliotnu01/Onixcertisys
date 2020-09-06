<template>
    <v-app>
        <v-row>
            <v-col cols="12" md="2" v-for="(i, x) in head_menu" :key="x">
                <v-card class="mx-auto" max-width="400">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <h3>{{i.text}}</h3>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-text>
                        <v-row align="center" justify="space-around">
                            <v-col class="display-1" cols="12">
                                999
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="mt-4 " width="100%">
                    <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="12" max-width="calc(100% - 32px)">
                        <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                    </v-sheet>
                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Grafica de cotizacion y facturación</div>
                        <v-divider class="my-2"></v-divider>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-card max-width="344" color="orange" dark>
                                    <v-card-text>
                                        <h4>Pendientes 2020</h4>
                                        <p class="display-1 text--primary">
                                            $99.999.99,99
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card max-width="344" color="green" dark>
                                    <v-card-text>
                                        <h4>Vendidas 2020</h4>
                                        <p class="display-1 text--primary">
                                            $99.999.99,99
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card max-width="344" color="red" dark>
                                    <v-card-text>
                                        <h4>Canceladas 2020</h4>
                                        <p class="display-1 text--primary">
                                            $99.999.99,99
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-card max-width="344" color="blue" dark>
                                    <v-card-text>
                                        <h4>Clientes 2020</h4>
                                        <p class="display-1 text--primary" >
                                            9999
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-3"></v-data-table>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-3"></v-data-table>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import {mapGetters, } from 'vuex'

export default {
    data() {
        return {
            head_menu: [
                { text: 'Total en Recibo' },
                { text: 'Total en Recepción' },
                { text: 'Total en Asignación' },
                { text: 'Total en calibración' },
                { text: 'Total  Calibrados' },
                { text: 'Total  Cancelados' }
            ],
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
            headers: [{
                text: 'Ultimas Cotizaciones Pendientes',
                align: 'start',
                sortable: false,
                value: 'name',
            }, ],
            desserts: [],
        }
    },
};
</script>
