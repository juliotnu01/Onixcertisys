<template>
<v-app>
    <v-dialog v-model="openDialog" persistent max-width="1256" min-width="1256">
        <!--<v-toolbar dark color="primary">
            <v-btn icon dark @click="openDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card>
        <v-container>
        </v-container>
        </v-card>
        -->
            <pdf src="/storage/file.pdf" :page="1"></pdf>
    </v-dialog>
</v-app>
</template>

<script>
import {mapGetters} from "vuex";
import pdf from "vue-pdf";
export default {
    components: {
        pdf,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            "services",
            "dialog_view_pdf_cotizacion",
            "clientes",
            "monedas",
            "empleados",
            "tiempos_de_entrega",
            "instrumentos",
        ]),
        openDialog: {
            get() {
                return this.dialog_view_pdf_cotizacion;
            },
            set(val) {
                this.$store.commit("setDialogViewPdfCotizacion", val);
            },
        },
        
    },
    async mounted() {
       
    },
    methods: {
      
      
    },
};
</script>
