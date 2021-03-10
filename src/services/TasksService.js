import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://my-json-server.typicode.com/aquij2254/jsonServer',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks () {
    return apiClient.get('/tasks')
  },
  getTask (id) {
    return apiClient.get('/tasks/' + id)
  }
}
