import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedVaccin:{},
  }


const Citoyen = (state = initialState, action) =>{
    switch(action.type){
        case types.RDV:
            return{...state,
            list:[...state.list, action.User]}
        default:
            return state
    }

}

export default Citoyen