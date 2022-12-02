import axios from 'axios'
import { BASE_URL, TIME_OUT } from "./config";

class MJRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (error) => {
      return error
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, methods: "get" })
  }

  post(config) {
    return this.request({ ...config, methods: "post" })
  }

}


export default new MJRequest(BASE_URL, TIME_OUT)
