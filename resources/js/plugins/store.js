import Vue from 'vue'
import Vuex from 'vuex'
import services from '../services.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    services,
    listUser: [],
  },
  getters:{
    services: state => state.services,
    listUser: state => state.listUser
  },
  mutations: {
    setListUser(state, data){
      console.log({data})
      state.listUser = data
    }
  },
})