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
    listCondicionDePago: [],
    dialog_add_condicion_de_pago: false,
    edit_condicion_de_pago: {},
    dialog_edit_condicion_de_pago: false,
    list_metodo_de_pago: [],
    dialog_add_metodo_de_pago: false,
    dialog_edit_metodo_de_pago: false,
    metodo_de_pago: {},
    tiempos_de_entrega: [],
    dialog_tiempo_de_entrega: false,
    dialog_edit_tiempo_de_entrega: false,
    tiempo_de_entrega: {},
    ciudades_estados_paises:[],
    dialog_add_ciudad_estado_pais: false,
    ciudad_estado_pais: {},
    dialog_edit_ciudad_estad_pais: false,
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
    acreditacion: state => state.acreditacion,
    listCondicionDePago: state => state.listCondicionDePago,
    dialog_add_condicion_de_pago: state => state.dialog_add_condicion_de_pago,
    edit_condicion_de_pago: state => state.edit_condicion_de_pago,
    dialog_edit_condicion_de_pago: state => state.dialog_edit_condicion_de_pago,
    list_metodo_de_pago: state => state.list_metodo_de_pago,
    dialog_add_metodo_de_pago: state => state.dialog_add_metodo_de_pago,
    dialog_edit_metodo_de_pago: state => state.dialog_edit_metodo_de_pago,
    metodo_de_pago: state => state.metodo_de_pago,
    tiempos_de_entrega: state => state.tiempos_de_entrega,
    dialog_tiempo_de_entrega: state => state.dialog_tiempo_de_entrega,
    dialog_edit_tiempo_de_entrega: state => state.dialog_edit_tiempo_de_entrega,
    tiempo_de_entrega: state =>  state.tiempo_de_entrega,
    ciudades_estados_paises: state => state.ciudades_estados_paises,
    dialog_add_ciudad_estado_pais: state => state.dialog_add_ciudad_estado_pais,
    ciudad_estado_pais: state => state.ciudad_estado_pais,
    dialog_edit_ciudad_estad_pais: state => state.dialog_edit_ciudad_estad_pais,
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
    },
    setListCondicionDePago(state, data){
      state.listCondicionDePago = data
    },
    setDialogAddCondicionDePago(state, data){
      state.dialog_add_condicion_de_pago = data
    },
    setEditCondicionDePago(state, data){
      state.edit_condicion_de_pago = data
    },
    setDialogEditCondicionDePago(state, data){
      state.dialog_edit_condicion_de_pago = data
    },
    setListMetodoDePago(state, data){
      state.list_metodo_de_pago = data
    },
    setDialogAddMetodoDePago(state, data){
      state.dialog_add_metodo_de_pago = data
    },
    setDialogEditMetodoDePago(state, data){
      console.log({data})
      state.dialog_edit_metodo_de_pago = data
    },
    setMetodoDePago(state, data){
      state.metodo_de_pago = data
    },
    setTiemposDeEntrega(state, data){
      state.tiempos_de_entrega = data
    },
    setDialogTiempoDeEntrega(state, data){
      state.dialog_tiempo_de_entrega  = data 
    },
    setDialogEditTiempoDeEntrega(state, data){
      state.dialog_edit_tiempo_de_entrega  = data
    },
    setTiempoDeEntrega(state, data){
      state.tiempo_de_entrega = data
    },
    setCiudadesEstadosPaises(state, data){
      state.ciudades_estados_paises = data
    },
    setDialogAddCiudadEstadoPais(state, data){
      state.dialog_add_ciudad_estado_pais  = data
    },
    setCiudadEstadoPais(state, data){
      state.ciudad_estado_pais = data
    },
    setDialogEditCiudadEstadoPais(state, data){
      state.dialog_edit_ciudad_estad_pais = data
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