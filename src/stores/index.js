import { createStore } from 'vuex'
import loader from './modules/loader'

const store = createStore({
  modules: {
    loader
  }
})

export default store
