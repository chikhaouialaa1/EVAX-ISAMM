import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedVaccin:{},
  }


const AuthReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.INSCRIPTION:
            return{...state,
            list:[...state.list, action.User]}
        default:
            return state
    }

}

export default AuthReducer