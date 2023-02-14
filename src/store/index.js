import { createStore } from 'vuex'
import {layoutModule} from "@/store/layoutModule";
import {tableModule} from "@/store/tableModule";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout: layoutModule,
    table: tableModule
  }
})
