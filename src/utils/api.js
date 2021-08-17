import axios from "axios"
const baseUrl = process.env.GOOGLE_API_BASE_URL
const httpClient = axios.create({
  baseURL: baseUrl
})

httpClient.interceptors.request.use(function (config) {
  // config.headers['language'] = language 

  return config
})

export default httpClient