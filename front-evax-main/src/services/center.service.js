import Axios from 'axios'
  
export const addCenter= async (center) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/enseignants" ,center
    )
    return result.data.center
  }
 /* export const deleteProf= async (id) => {
    //await delay(1000)

    const result = await Axios.delete(
        "http://localhost:3000/api/enseignants/"+id,
    )
    return result.data.enseignant
  }
*/