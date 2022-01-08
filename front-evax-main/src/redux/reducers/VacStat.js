import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
   
  }

const vaccinStat = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_VACSTAT_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VACSTAT_SUCCESS:
            return { ...state, list: [...action.vacStat], loading: false }
        case types.FETCH_VACSTAT_FAILURE:
            return { ...state, error: true, loading: false }

        default:
            return state
    }

}

export default vaccinStat;