import axios from 'axios'
import type { CatModel } from '$lib/model/Cat'

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    'Content-Type': 'application/json',
  },
})

const cat_get = async (url, request?) => {
  const res = await catApi.get(url, { params: request })
  return res.data
}

/* catAPIを叩いて、 */
export const getCats = async (limit:number = 3): Promise<CatModel[]>=> {
    try{
      // @ts-ignore
      let data: CatModel[] = await cat_get('/images/search',{limit})
      return data
    }
    catch (error) {
      throw error
    }
}
