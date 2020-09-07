<template>
    <v-app>
        <v-row justify="start" align="start">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-card max-width="700">
                    <v-img height="200px" src="http://localhost:8000/img/login-logo.png" />
                    <v-card-text class="text--primary">
                        <v-form ref="f_empresa">
                            <v-row justify="center">
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Nombre de la empresa" placeholder="" outlined v-model="dataEmpresa.nombre_empresa"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Actividad Comercial" placeholder="" outlined v-model="dataEmpresa.actividad_comercial"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="R.F.C" placeholder="" outlined v-model="dataEmpresa.rfc"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                                    <v-text-field :rules="[rules.required]" label="Correo Electronico" placeholder="" outlined v-model="dataEmpresa.correo_electronico"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Teléfono" placeholder="" outlined v-model="dataEmpresa.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="IVA (%)" placeholder="" outlined v-model="dataEmpresa.iva"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Utilidad (%) " placeholder="" outlined v-model="dataEmpresa.utilidad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="12">
                                    <v-text-field :rules="[rules.required]" label="Dirección" placeholder="" outlined v-model="dataEmpresa.direccion"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Ciudad" placeholder="" outlined v-model="dataEmpresa.ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Estado" placeholder="" outlined v-model="dataEmpresa.estado"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="4">
                                    <v-text-field :rules="[rules.required]" label="Pais" placeholder="" outlined v-model="dataEmpresa.pais"></v-text-field>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="6" lg="3">
                                    <v-text-field :rules="[rules.required]" label="Codigo Postal" placeholder="" outlined v-model="dataEmpresa.codigo_postal"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange" text @click.prevent="addEmpresa">
                            Registrar Datos
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            rules: {
                required: value => !!value || 'Este campo es necesario'
            },
        }
    },
    computed: {
        ...mapGetters(['services', 'empresa']),
        dataEmpresa: {
            get() {
                return this.empresa
            },
            set(val) {
                this.empresa = val
            }
        }
    },
    mounted() {
        this.services.empresaServices.getEmpresa()
    },
    methods: {
        async addEmpresa() {
            try {
                if (this.$refs.f_empresa.validate()) {
                    await this.services.empresaServices.agregarEmpresa(this.dataEmpresa)
                    await this.services.empresaServices.getEmpresa()
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
};

</script>
