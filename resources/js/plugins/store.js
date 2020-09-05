import Vue from 'vue'
import Vuex from 'vuex'
import services from '../services.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    services,
    listUser: [],
    user: {},
  },
  getters:{
    services: state => state.services,
    listUser: state => state.listUser,
    user: state => state.user
  },
  mutations: {
    setListUser(state, data){
      state.listUser = data
    },
    setUSer(state, data){
      state.user = data
      state.user.nameRol = data.user_has_rol.name_rol
      console.log(state.user)
    }
  },
})