<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="openDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="$refs.myPdfComponent.print()" text icon>
                <v-icon>mdi-printer</v-icon>
            </v-btn>
        </v-toolbar>
        <pdf ref="myPdfComponent" :src="ruta_pdf_factura"></pdf>
    </v-dialog>
</v-app>
</template>

<script>
import {
    mapGetters
} from "vuex";
import pdf from "vue-pdf";
export default {
    components: {
        pdf,
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_pdf_factura",
            'ruta_pdf_factura'
        ]),
        openDialog: {
            get() {
                return this.dialog_pdf_factura;
            },
            set(val) {
                this.$store.commit("setDialogPdfFactura", val);
            },
        },

    },
    async mounted() {

    },
    methods: {

    },
};
</script>
