import messages  from "./messages"
import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages
  })
}

export default rootReducer
