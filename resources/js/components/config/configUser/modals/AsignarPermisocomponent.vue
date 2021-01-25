<template>
  <v-app>
    <v-dialog v-model="openPermisoRolDialog" width="700">
      <v-card v-if="Object.entries(this.user_selected_rol_premision).length > 0">
        <v-card-title>Asignar Permisos Globales</v-card-title>
        <v-container>
          <v-card-text>
            <h3>Usuario: {{ user_selected_rol_premision.name }}</h3>
            <h3>Rol: {{ user_selected_rol_premision.user_has_rol.name_rol }}</h3>
          </v-card-text>
          <v-card-text>
            <v-form ref="f_register_rol">
              <v-row align="center" justify="space-around">
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-checkbox
                    v-model="var_selected_ruta"
                    :label="`Ruta: ${item.path}`"
                    :value="`Ruta: ${item.path}`"
                    v-for="(item, r) in rutas"
                    :key="r"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-switch
                    v-model="
                      user_selected_rol_premision.user_has_rol.associated_rol_premission
                        .crear
                    "
                    label="Crear"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-switch
                    v-model="
                      user_selected_rol_premision.user_has_rol.associated_rol_premission
                        .leer
                    "
                    label="Leer"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-switch
                    v-model="
                      user_selected_rol_premision.user_has_rol.associated_rol_premission
                        .actualizar
                    "
                    label="Editar"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-switch
                    v-model="
                      user_selected_rol_premision.user_has_rol.associated_rol_premission
                        .eliminar
                    "
                    label="Eliminar"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue" @click="AsignarPermiso">Guardar Permisos</v-btn>
            <v-btn text color="red" @click="openPermisoRolDialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      var_modulo_selected: {},
      itemRoute: [],
      permisos_user: [],
      rutas: this.$router.options.routes,
      var_selected_ruta: [],
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "listUser",
      "dialog_user_rol_permission",
      "user_selected_rol_premision",
      "list_route",
    ]),
    openPermisoRolDialog: {
      get() {
        return this.dialog_user_rol_permission;
      },
      set(val) {
        this.$store.commit("setDialogUserRolPermission", val);
      },
    },
  },
  mounted() {
    this.services.userServices.getListUser();
  },
  methods: {
    async AsignarPermiso() {
      var model = {
        crear: this.user_selected_rol_premision.user_has_rol.associated_rol_premission
          .crear,
        leer: this.user_selected_rol_premision.user_has_rol.associated_rol_premission
          .leer,
        actualizar: this.user_selected_rol_premision.user_has_rol
          .associated_rol_premission.actualizar,
        eliminar: this.user_selected_rol_premision.user_has_rol.associated_rol_premission
          .eliminar,
        id: this.user_selected_rol_premision.user_has_rol.associated_rol_premission.id,
        rutas: this.rutas,
      };
      this.services.permisosServices.update(model);
    },
  },
};
</script>
