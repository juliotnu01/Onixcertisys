<template>
  <v-app>
    <v-app-bar
      app
      color="#fff"
      v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.xl"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link to="/">
          <v-img :src="`${root}/img/login-logo.png`" width="200" />
        </router-link>
      </v-toolbar-title>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <img src="https://img.icons8.com/dusk/40/000000/permanent-job.png" />
            Clientes
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.cliente' }">
                <v-icon>mdi-account-box-multiple </v-icon>
                Enlazar cotizacion cliente
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.cliente.add-cliente' }">
                <v-icon>mdi-briefcase-account</v-icon>
                Gestionar cliente
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
              <router-link :to="{ name: 'home.cotizaciones' }">
                <v-icon>mdi-clipboard-text-outline</v-icon>
                Cotizaciones
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.recibos' }">
                <v-icon>mdi-receipt</v-icon>
                Orden de servicio
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <img src="https://img.icons8.com/dusk/40/000000/bill.png"/>
            Finanzas
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.factura' }">
                <v-icon>mdi-cash-register</v-icon>
                Factura
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
          <v-list-item-title>
              <router-link :to="{ name: 'home.administrar.facturas' }">
                <v-icon>mdi-list-status</v-icon>
                Administrar Facturas
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <img
              src="https://img.icons8.com/dusk/
                40/000000/microscope.png"
            />
            Laboratorio
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.laboratorio' }">
                <v-icon>mdi-crosshairs-gps </v-icon>
                Calibracion
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon text v-bind="attrs" v-on="on">
            <img src="https://img.icons8.com/dusk/40/000000/guarantee.png" />
            Calidad
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'home.reportes' }">
                <v-icon>mdi-file-chart</v-icon>
                Reportes
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on">
            <v-avatar size="32px" item>{{ user.name }}</v-avatar>
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
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon small>mdi-email</v-icon>
                  {{ user.email }}
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
    <v-main
      v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.xl"
    >
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
    <!-- bar mobile-->
    <v-card
      class="mx-auto overflow-hidden"
      v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
    >
      <v-app-bar color="#ffffff">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/">
            <v-img
              :src="`${root}/img/login-logo.png`"
              width="200"
              height="40"
            /> </router-link
        ></v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list three-line>
          <template>
            <v-list-item>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon large v-bind="attrs" v-on="on">
                    <v-avatar size="32px" item>{{ user.name }}</v-avatar>
                  </v-btn>
                </template>
                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-icon small>mdi-account</v-icon>
                          {{ user.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon small>mdi-email</v-icon>
                          {{ user.email }}
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
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-bell</v-icon>
              </v-btn>
            </v-list-item>
          </template>
          <v-divider></v-divider>
        </v-list>
        <v-list nav dense>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Clientes</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>
                <router-link :to="{ name: 'home.cliente' }">
                  <v-icon>mdi-account-box-multiple </v-icon>
                  Clonar cotizacion cliente
                </router-link>
              </v-list-item-title>

              <v-list-item-icon> </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Ventas</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item>
              <v-list-item-title>
                <router-link :to="{ name: 'home.cotizaciones' }">
                  <v-icon>mdi-clipboard-text-outline</v-icon>
                  Cotizaciones
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link :to="{ name: 'home.recibos' }">
                  <v-icon>mdi-receipt</v-icon>
                  Orden de servicio
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link :to="{ name: 'home.factura' }">
                  <v-icon>mdi-cash-register</v-icon>
                  Factura
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Laboratorio</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link>
              <v-list-item-title>
                <router-link :to="{ name: 'home.laboratorio' }">
                  <v-icon>mdi-crosshairs-gps </v-icon>
                  Calibracion
                </router-link>
              </v-list-item-title>
              <v-list-item-icon> </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Calidad</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link>
              <v-list-item-title>
                <router-link :to="{ name: 'home.reportes' }">
                  <v-icon>mdi-file-chart</v-icon>
                  Reportes
                </router-link>
              </v-list-item-title>
              <v-list-item-icon> </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
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
    </v-card>
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
      drawer: false,
      group: null,
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
