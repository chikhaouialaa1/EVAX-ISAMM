import Axios from 'axios'
  
export const getVaccinStat= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/vaccinStat"
    )
    return result.data
  }