<template>
    <v-app>
        <v-row>
            <v-col cols="2" xs="2" sm="2" md="2" lg="2">
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
                              <router-link :to="{name:'config-user'}">
                                <v-icon>mdi-account-group</v-icon>
                                Usuarios
                              </router-link>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-card>
            </v-col>
            <v-col cols="1" xs="10" sm="10" md="10" lg="10" class="mx-0">
                      <router-view></router-view>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: 'Usuarios', icon: 'mdi-account-group', route: 'config-user'},
            ],
        }
    },
}

</script>
