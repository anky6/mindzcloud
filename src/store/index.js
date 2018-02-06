import Vue from 'vue'
import Vuex from 'vuex'
// modules
import auth from './modules/auth'
import gen from './modules/gen'
//

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    //
    gen
  }
})
