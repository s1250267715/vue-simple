import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import a from "./modules/a"
import b from "./modules/b"

const store = new Vuex.Store({
  modules: {
    a: a,
    b: b
  }
})
export default store