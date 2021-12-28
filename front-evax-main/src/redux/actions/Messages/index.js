import * as types from "../../types/types"
import * as api from "../../../services/contact.service"


export const addMsg = (message) => async (dispatch) => {
  
    const newMsg= await api.addMsg(message)
  
    dispatch({
      type: types.ADD_MSG,
      message: newMsg,
    
    })
    console.log(message)
  }