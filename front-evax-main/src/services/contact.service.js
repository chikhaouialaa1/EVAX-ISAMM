
import Axios from 'axios'

export const addMsg = async (message) => {
  console.log(message)
    const result = await Axios.post(
      "http://localhost:4000/newMessage",
      message
    )
    
    return result.data
  }
