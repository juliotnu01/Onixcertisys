import Vue from 'vue'
import Vuex from 'vuex'
import services from '../services.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    services,
  },
  getters:{
    services: state => state.services,
  },
  mutations: {},
})