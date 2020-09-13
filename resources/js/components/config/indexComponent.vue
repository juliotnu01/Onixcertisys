<template>
    <v-app>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                <v-card elevation="12" width="356">
                    <v-navigation-drawer floating permanent class="mx-0">
                        <v-list dense rounded>
                            <v-list-item>
                                <router-link :to="{name:'config-user'}">
                                    <v-icon>mdi-account-group</v-icon>
                                    Usuarios
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link :to="{name:'config-empresa'}">
                                    <v-icon>mdi-domain</v-icon>
                                    Empresa
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link :to="{name:'config.datos.sistema'}">
                                    <v-icon>mdi-cog-sync</v-icon>
                                    Datos del Sistema
                                </router-link>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-card>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="10" lg="10" class="mx-0">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
          
        }
    },
}

</script>
