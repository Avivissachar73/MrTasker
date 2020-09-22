import Vue from 'vue'
import Vuex from 'vuex'

import taskModule from '../modules/task/task.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    taskModule
  }
})
