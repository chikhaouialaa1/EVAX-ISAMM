import Axios from 'axios'
  

export const getCenter= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/Vaccination-centre-list"
    )
    return result.data
  }


export const addCenter = async (center) => {
    const result = await Axios.post(
      "http://localhost:4000/new-vaccination-centre",
      center
    )
    return result.data
  }

//gouvernorat
export const getGouvernorat= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/gouvernorat"
    )
    return result.data
  }