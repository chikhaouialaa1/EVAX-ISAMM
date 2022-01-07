import messages  from "./messages"
import centers from './Centers'
import gouvernorat from './Gouvernorat'
import voluntaries from './voluntaries'
import vaccins from './Vaccins'

import Jpos from './Jpos'

import vaccinStat from './VacStat'

import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    messages,
    centers,
    gouvernorat,vaccins,
    Jpos,
    voluntaries,
    vaccinStat,

  })
}

export default rootReducer
