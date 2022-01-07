import Axios from 'axios'
export const getJpo= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/jpo-list"
    )
    return result.data
  }

export const fetchJpoById = async (id) => {
    const result = await Axios.get(
      "http://localhost:4000/jpo-id/"+id
    )
    return result.data
  }
export const addJpo = async (jpo) => {
    const result = await Axios.post(
      "http://localhost:4000/new-jpo",
      jpo
    )
    return result.data
  }

export const deleteJpo = async (id) => {
    console.log(id)
      const result = await Axios.post(
        "http://localhost:4000/jpo-del/"+id
      )
      
      return result.data
    }
export const affectVaccinJpo = async (jpoCenter) => {
    
    const result = await Axios.post(
          "http://localhost:4000/affect-center-to-jpo",jpoCenter
        )
        
        return result.data
      }
export const deleteVaccinFromJpo = async (jpoCenter) => {
    
        const result = await Axios.get(
              "http://localhost:4000/jpo-del-center",jpoCenter
            )
            
            return result.data
          }
export const getAllJpoCenters = async (jpoId) => {
    
            const result = await Axios.get(
                  "http://localhost:4000/jpo-centers",jpoId
                )
                
                return result.data
              }
export const getJpoOneCenter = async (ids) => {
    
                const result = await Axios.get(
                      "http://localhost:4000/jpo-one-center",ids
                    )
                    
                    return result.data
                  }