import messages  from "./messages"
import centers from './Centers'
import gouvernorat from './Gouvernorat'
import vaccins from './Vaccins'
import Jpos from './Jpos'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages,
    centers,
    gouvernorat,vaccins,
    Jpos
  })
}

export default rootReducer
