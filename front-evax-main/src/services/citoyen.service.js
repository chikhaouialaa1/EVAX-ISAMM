import Axios from 'axios'

export const rdv = async (token,id_center) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    const result = await Axios.post(
      "http://localhost:4000/rdv",token,id_center
    )
    return result.data
  }