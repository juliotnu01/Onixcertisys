<template>
  <v-app>
    <v-row justify="center">
      <v-col cols="12" sm="12" xs="12" md="6" lg="7">
        <v-card class="p-2">
          <v-card-title>Usuarios</v-card-title>
          <v-container>
            <v-toolbar flat color="white">
              <v-text-field
                label="Buscar Usuario"
                placeholder
                v-model="search_user"
                outlined
                small
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-2"
                fab
                dark
                color="primary"
                @click="$store.commit('setUserRegisterModal', true)"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-data-table
              :headers="headers_user"
              :items="listUser"
              :search="search_user"
              class="elevation-3"
            >
              <template v-slot:item.accion="{ item }">
                <td class="text-center">
                  <v-btn icon color="red" small @click="eliminarUsuario(item)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon color="warning" small @click="editarUsuario(item)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </td>
              </template>
              <template v-slot:item.ad_user="{ item }">
                <td class="text-center">
                  <v-switch label class="text-center m-0" small></v-switch>
                </td>
              </template>
              <template v-slot:item.add_premiso="{ item }">
                <td class="text-center">
                  <v-btn
                    class="mx-2"
                    dark
                    color="green"
                    text
                    block
                    @click="asignarPermisos(item)"
                    >Asignar permisos</v-btn
                  >
                </td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" xs="12" md="6" lg="4">
        <v-card class="p-2">
          <v-card-title>Roles y permiso del usuario</v-card-title>
          <v-container>
            <v-toolbar flat color="white">
              <v-text-field
                label="Buscar rol"
                placeholder
                v-model="search_rol"
                outlined
                small
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-2"
                fab
                dark
                color="primary"
                @click="$store.commit('setRolRegisterModal', true)"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-data-table
              :headers="headers_rol"
              :items="listRoles"
              :search="search_rol"
              class="elevation-3"
            >
              <template v-slot:item.accion="{ item }">
                <td class="text-center">
                  <v-btn icon color="red" small @click="eliminarRol(item)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon color="warning" small @click="editarRol(item)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </td>
              </template>

              <template v-slot:item.add_user="{ item }">
                <td class="text-center">
                  <v-btn
                    class="mx-2"
                    dark
                    color="green"
                    text
                    block
                    @click="asignarRol(item)"
                    >Asignar rol</v-btn
                  >
                </td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <modal-usuario />
    <modal-rol />
    <modal-asignar-rol :RolAsignado="llamado" />
    <modal-asignar-permiso />
    <modal-editar-usuario />
    <modal-editar-rol />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import modalUserComponent from "../configUser/modals/modalUserComponent.vue";
import modalRolComponent from "../configUser/modals/modalRolComponnent.vue";
import modalAsignarRolComponent from "../configUser/modals/modalAsignarRolComponent.vue";
import modalAsignarPermisoComponent from "../configUser/modals/AsignarPermisocomponent.vue";
import modalEditarUsuarioComponent from "../configUser/modals/modalEditarUsuarioComponent.vue";
import modalEditarRolComponent from "../configUser/modals/editRolComponent.vue";
export default {
  components: {
    "modal-usuario": modalUserComponent,
    "modal-rol": modalRolComponent,
    "modal-asignar-rol": modalAsignarRolComponent,
    "modal-asignar-permiso": modalAsignarPermisoComponent,
    "modal-editar-usuario": modalEditarUsuarioComponent,
    "modal-editar-rol": modalEditarRolComponent,
  },
  data() {
    return {
      var_dialog: false,
      search_rol: "",
      search_user: "",
      headers_user: [
        {
          text: "Nombre del usuario",
          align: "end",
          sortable: false,
          sortable: true,
          value: "name",
        },
        {
          text: "Correo del usuario",
          align: "start",
          sortable: false,
          value: "email",
        },
        {
          text: "Rol del usuario",
          align: "center",
          sortable: false,
          sortable: true,
          value: "rol_user",
        },
        {
          text: "Acción",
          align: "center",
          sortable: false,
          value: "accion",
        },
        {
          text: "Activar/Desactivar Usuario",
          align: "center",
          sortable: false,
          value: "ad_user",
        },
        {
          text: "Asignar Permisos del rol",
          align: "center",
          sortable: false,
          value: "add_premiso",
        },
      ],
      headers_rol: [
        {
          text: "Nombre del rol",
          align: "end",
          sortable: false,
          sortable: true,
          value: "name_rol",
        },
        {
          text: "Acción",
          align: "center",
          sortable: false,
          value: "accion",
        },
        {
          text: "Asignar rol a usuario",
          align: "center",
          sortable: false,
          value: "add_user",
        },
      ],
    };
  },
  async mounted() {
    await this.services.userServices.getListUser();
    await this.services.rolServices.getListRoles();
  },
  computed: {
    ...mapGetters(["listUser", "services", "listRoles", "user", "routes_vue"]),
  },
  methods: {
    ...mapActions([
      "chargeRolSelected",
      "chargeUserSelectedRolPermission",
      "chargeUserEditar",
      "chargeRol",
    ]),
    async asignarRol(rol) {
      await this.chargeRolSelected(rol);
      await this.services.userServices.getListUser();
      await this.services.rolServices.getListRoles();
    },
    async asignarPermisos(usr) {
      await this.chargeUserSelectedRolPermission(usr);
      await this.services.userServices.getListUser();
    },
    async editarUsuario(user) {
      await this.chargeUserEditar(user);
      await this.services.userServices.getListUser();
    },
    async eliminarUsuario(user) {
      try {
        await this.services.userServices.deleteUser(user);
        await this.services.userServices.getListUser();
      } catch (e) {
        console.log(e);
      }
    },
    async editarRol(rol) {
      await this.chargeRol(rol);
    },
    async eliminarRol(rol) {
      await this.services.rolServices.deleteRol(rol);
      await this.services.rolServices.getListRoles();
    },
    async llamado(status) {
      await this.services.userServices.getListUser();
      await this.services.rolServices.getListRoles();
    },
  },
};
</script>
