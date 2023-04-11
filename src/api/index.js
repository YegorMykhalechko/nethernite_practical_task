import axios from 'axios'
import store from '../stores/index'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use((config) => {
  store.commit('loader/setLoading', true)
  return config
})

api.interceptors.response.use(
  (res) => {
    store.commit('loader/setLoading', false)
    return Promise.resolve(res.data)
  },
  (err) => {
    store.commit('loader/setLoading', false)
    return Promise.reject(err)
  }
)

export default api
