<template>
  <v-app>
    <v-app-bar app color="#fff">
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link to="/">
          <v-img :src="`${root}/img/login-logo.png`" width="200" />
        </router-link>
      </v-toolbar-title>
      <v-btn icon text>
        <img src="https://img.icons8.com/dusk/40/000000/permanent-job.png" />
        Clientes
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <img src="https://img.icons8.com/dusk/40/000000/cash-in-hand.png" />
            Ventas
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{name: 'home.cotizaciones'}">
              <v-icon>mdi-clipboard-text-outline</v-icon>
              Cotizaciones
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{name: 'home.recibos'}">
                <v-icon>mdi-receipt</v-icon>
              Recibos
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn icon text>
        <img src="https://img.icons8.com/dusk/
                40/000000/microscope.png" />
        Laboratorio
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon text>
        <img src="https://img.icons8.com/dusk/40/000000/guarantee.png" />
        Calidad
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on">
            <v-avatar size="32px" item>{{user.name}}</v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon small>mdi-account</v-icon>
                  {{user.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon small>mdi-email</v-icon>
                  {{user.email}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action></v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn icon>
              <router-link :to="{ name: 'config' }">
                <v-icon>mdi-cog</v-icon>
              </router-link>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="logout">Cerrar Sesion</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    root: {
      type: String,
    },
    authusr: {
      type: Object,
    },
  },
  mounted() {
    this.determinateUser(this.authusr);
  },
  data() {
    return {
      menu: false,
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" },
      ],
    };
  },
  computed: {
    ...mapGetters(["services", "user", "leer"]),
  },
  methods: {
    async logout() {
      this.services.userServices.logoutUsr();
    },
    async determinateUser(usr) {
      this.services.userServices.itExistUsr(usr);
    },
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-width: 100%;
  position: relative;
}
</style>
