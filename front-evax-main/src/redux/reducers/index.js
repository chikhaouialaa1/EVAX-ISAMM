import messages  from "./messages"
import centers from './Centers'
import gouvernorat from './Gouvernorat'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages,
    centers,
    gouvernorat,
  })
}

export default rootReducer
