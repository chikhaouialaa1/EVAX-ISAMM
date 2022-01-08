import messages  from "./messages"
import centers from './Centers'
import gouvernorat from './Gouvernorat'
import vaccins from './Vaccins'
import user from './Auth-Reducer'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages,
    centers,
    gouvernorat,vaccins,user,
  })
}

export default rootReducer
