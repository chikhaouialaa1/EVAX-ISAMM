import Axios from 'axios'
  
export const getVaccin= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/vaccins"
    )
    return result.data
  }
  
export const addVaccin = async (vaccin) => {
    const result = await Axios.post(
      "http://localhost:4000/Vaccin",
      vaccin
    )
    return result.data
  }

  export const deleteVaccin = async (id) => {
    console.log(id)
      const result = await Axios.post(
        "http://localhost:4000/Vaccin-del/"+id
      )
      
      return result.data
    }
    export const fetchVaccinById = async (id) => {
        const result = await Axios.get(
          "http://localhost:4000/Vaacin-id/"+id
        )
        return result.data
      }
       export const updateVaccin = async (id, Vaccin) => {
    console.log(Vaccin)
      const result = await Axios.post(
        "http://localhost:4000/Vaccin-id/"+id,{id, Vaccin} 
      )
      
      return result.data
    }

    
export const addCenterVaccin = async (vaccin) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",vaccin)
  const result = await Axios.post(
    "http://localhost:4000/VaccinCenter",
    vaccin
  )
  return result.data
}
