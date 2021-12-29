import messages  from "./messages"
import centers from './Centers'
import gouvernorat from './Gouvernorat'
import voluntaries from './voluntaries'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages,
    centers,
    gouvernorat,
    voluntaries
  })
}

export default rootReducer
