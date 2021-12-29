
import Axios from 'axios'


  export const getvoluntaries= async () => {
    //await delay(1000)

    const result = await Axios.get(
        "http://localhost:4000/volontaire"
    )
    return result.data
  }
