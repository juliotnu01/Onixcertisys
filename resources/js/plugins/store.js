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
    dialog_user_register: false
  },
  getters: {
    services: state => state.services,
    listUser: state => state.listUser,
    user:     state => state.user,
    leer:     state =>  state.leer,
    dialog_user_register: state => state.dialog_user_register
  },
  mutations: {
    setListUser(state, data){
      state.listUser = data
    },
    setUSer(state, data){
      state.user = data
    },
    setLeer(state, data){
      console.log({data})
      state.leer = data
    },
    setUserRegisterModal(state, data){
      state.dialog_user_register = data
    }
  },
}); 