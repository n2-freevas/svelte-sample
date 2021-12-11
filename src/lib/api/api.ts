// Api.js
import axios from 'axios'

function switchBaseURL() {
  return "https://api.thecatapi.com/v1/images"
}

// あなたのサーバーにアクセスする基本的なAPI
const YourAxiosAPI = axios.create({
  baseURL: switchBaseURL(),
  headers: {
    'Content-Type': 'application/json',

  },
})

const get = async (url, request?) => {
  const res = await YourAxiosAPI.get(url, { params: request })
  return res.data
}

const post = async (url, request) => {
  const res = await YourAxiosAPI.post(url, request)
  return res.data
}


const Api = {
  get,
  post
}
export default Api
