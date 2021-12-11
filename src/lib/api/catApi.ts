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
      console.log(JSON.stringify(data))
      return data
    }
    catch (error) {
      throw error
    }
}
export const getCatsMock = (): Promise<CatModel[]>=>{
  // @ts-ignore
  return [{"breeds":[],"id":"3nb","url":"https://cdn2.thecatapi.com/images/3nb.jpg","width":500,"height":334},{"breeds":[],"id":"6um","url":"https://cdn2.thecatapi.com/images/6um.jpg","width":2912,"height":4368},{"breeds":[],"id":"e3d","url":"https://cdn2.thecatapi.com/images/e3d.jpg","width":500,"height":298},{"breeds":[],"id":"eak","url":"https://cdn2.thecatapi.com/images/eak.jpg","width":600,"height":725},{"breeds":[],"id":"MTUwMDU4MA","url":"https://cdn2.thecatapi.com/images/MTUwMDU4MA.jpg","width":500,"height":333},{"breeds":[],"id":"MTYxNTEwNA","url":"https://cdn2.thecatapi.com/images/MTYxNTEwNA.jpg","width":595,"height":604},{"breeds":[{"weight":{"imperial":"7 - 14","metric":"3 - 6"},"id":"hima","name":"Himalayan","vetstreet_url":"http://www.vetstreet.com/cats/himalayan","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/himalayan","temperament":"Dependent, Gentle, Intelligent, Quiet, Social","origin":"United States","country_codes":"US","country_code":"US","description":"Calm and devoted, Himalayans make excellent companions, though they prefer a quieter home. They are playful in a sedate kind of way and enjoy having an assortment of toys. The Himalayan will stretch out next to you, sleep in your bed and even sit on your lap when she is in the mood.","life_span":"9 - 15","indoor":0,"lap":1,"alt_names":"Himalayan Persian, Colourpoint Persian, Longhaired Colourpoint, Himmy","adaptability":5,"affection_level":5,"child_friendly":2,"dog_friendly":2,"energy_level":1,"grooming":5,"health_issues":3,"intelligence":3,"shedding_level":4,"social_needs":4,"stranger_friendly":2,"vocalisation":1,"experimental":0,"hairless":0,"natural":0,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Himalayan_(cat)","hypoallergenic":0,"reference_image_id":"CDhOtM-Ig"}],"id":"2xlxL0oI_","url":"https://cdn2.thecatapi.com/images/2xlxL0oI_.jpg","width":2592,"height":1944},{"breeds":[],"id":"PiooRQKuN","url":"https://cdn2.thecatapi.com/images/PiooRQKuN.jpg","width":1265,"height":951},{"breeds":[],"id":"P15LV1vv1","url":"https://cdn2.thecatapi.com/images/P15LV1vv1.jpg","width":347,"height":280},{"breeds":[],"id":"xsLYwqAGj","url":"https://cdn2.thecatapi.com/images/xsLYwqAGj.jpg","width":431,"height":575}]
}
