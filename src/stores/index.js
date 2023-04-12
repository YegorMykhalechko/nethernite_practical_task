import { createStore } from 'vuex'
import loader from './modules/loader'
import packageModule from './modules/packageModule'

const store = createStore({
  modules: {
    loader,
    packageModule
  }
})

export default store
