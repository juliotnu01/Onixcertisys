import Vuex from 'vuex'
import Vue from 'vue'
import services from '../services.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services,
    listUser: [],
    user: {},
    leer: 0,
    dialog_user_register: false,
    dialog_rol_register: false,
    dialog_asignar_rol: false,
    listRoles: [],
    rol_selected: {},
    user_selected_rol_premision:{},
    dialog_user_rol_permission: false,
    dialog_editar_usuario: false,
    dialog_editar_rol: false,
    edit_rol: {},
    empresa:{
          nombre_empresa: '',
          actividad_comercial: '',
          rfc: '',
          correo_electronico: '',
          telefono: '',
          iva: '',
          utilidad: '',
          direccion: '',
          ciudad: '',
          estado: '',
          codigo_postal: '',
          pais: '',
    },
    magnitudes: [],
    dialog_add_magnitudes: false,
    dialog_edit_magnitudes: false,
    magnitud_edit:{},
    dialog_add_acreditacion: false,
    acreditaciones:[],
    dialog_edit_acreditacion: false,
    acreditacion: {},
  },
  getters: {
    services: state => state.services,
    listUser: state => state.listUser,
    user:     state => state.user,
    leer:     state =>  state.leer,
    dialog_user_register: state => state.dialog_user_register,
    dialog_rol_register: state => state.dialog_rol_register,
    listRoles: state => state.listRoles,
    dialog_asignar_rol: state => state.dialog_asignar_rol,
    rol_selected: state =>  state.rol_selected,
    user_selected_rol_premision: state => state.user_selected_rol_premision,
    dialog_user_rol_permission: state => state.dialog_user_rol_permission,
    list_route: state => state.list_route,
    dialog_editar_usuario: state => state.dialog_editar_usuario,
    dialog_editar_rol: state => state.dialog_editar_rol,
    edit_rol: state => state.edit_rol,
    empresa: state => state.empresa,
    magnitudes: state => state.magnitudes,
    dialog_add_magnitudes: state => state.dialog_add_magnitudes,
    dialog_edit_magnitudes: state => state.dialog_edit_magnitudes,
    magnitud_edit: state => state.magnitud_edit,
    dialog_add_acreditacion: state => state.dialog_add_acreditacion,
    acreditaciones: state => state.acreditaciones,
    dialog_edit_acreditacion: state => state.dialog_edit_acreditacion,
    acreditacion: state => state.acreditacion
  },
  mutations: {
    setListUser(state, data){
      state.listUser = data
    },
    setUser(state, data){
      state.user = data
    },
    setLeer(state, data){
      state.leer = data
    },
    setUserRegisterModal(state, data){
      state.dialog_user_register = data
    },
    setRolRegisterModal(state, data){
      state.dialog_rol_register = data
    },
    setAsignarRolModal(state, data){
      state.dialog_asignar_rol = data
    },
    setRoles(state, data){
      state.listRoles = data
    },
    setRolSelected(state, data){
      state.rol_selected = data
    },
    setUserSelectedRolPermission(state, data){
      state.user_selected_rol_premision = data
    },
    setDialogUserRolPermission(state, data){
      state.dialog_user_rol_permission = data
    },
    setDialogEditarUsuario(state, data){
      state.dialog_editar_usuario = data
    },
    setDialogEditRol(state, data){
      state.dialog_editar_rol = data
    },
    setEditRol(state, data){
      state.edit_rol = data
    },
    setEmpresa(state, data){
      if (data) {
        state.empresa = data  
      }else {
        state.empresa = {
          nombre_empresa: '',
          actividad_comercial: '',
          rfc: '',
          correo_electronico: '',
          telefono: '',
          iva: '',
          utilidad: '',
          direccion: '',
          ciudad: '',
          estado: '',
          codigo_postal: '',
          pais: '',
        }
      }
    },
    setMagnitudes(state, data){
      state.magnitudes = data
    },
    setDialogAddMagnitudes(state, data){
      state.dialog_add_magnitudes = data
    },
    setDialogEditMagnitudes(state, data){
      state.dialog_edit_magnitudes = data
    },
    setEditMagnitud(state, data){
      state.magnitud_edit = data
    },
    setdialogAddAcreditacion(state, data){
      state.dialog_add_acreditacion = data
    },
    setAcreditaciones(state, data){
      state.acreditaciones = data
    },
    setDialogEditAcreditacion(state, data){
      state.dialog_edit_acreditacion = data
    },
    setAcreditacion(state, data){
      state.acreditacion = data
    }
  },
  actions: {
    chargeRolSelected({commit}, data){
      commit('setRolSelected', data)
      commit('setAsignarRolModal', true)
    },
    chargeUserSelectedRolPermission({commit}, data){
        commit('setUserSelectedRolPermission', data)
        commit('setDialogUserRolPermission', true)
    },
    chargeUserEditar({commit}, data){
      commit('setDialogEditarUsuario', true)
      commit('setUser', data)
    },
    chargeRol({commit}, data){
      commit('setEditRol', data)
      commit('setDialogEditRol', true)
    }
  }
}); 