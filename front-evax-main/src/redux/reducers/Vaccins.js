import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedVaccin:{},
  }

const vaccins = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_VACCIN_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VACCIN_SUCCESS:
            return { ...state, list: [...action.tasks], loading: false }
        case types.FETCH_VACCIN_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_VACCIN:
            return{...state,
            list:[...state.list, action.Vaccin]}
        case types.DELETE_VACCIN:
            const newvaccins = state.list.filter((Vaccin) => Vaccin._id !== action.id)
            return { ...state, list: newvaccins }
        case types.FETCH_VACCIN_BY_ID:
            return{...state,
            selectedVaccin: action.vaccin}
        case types.UPDATE_VACCIN:
            const updatedvaccins = state.list.map((Vaccin) => {
                if (Vaccin._id === action.id) {
                    return action.Vaccin
                }
                  return Vaccin
                })
                return { ...state, list: updatedvaccins }
        default:
            return state
    }

}
export default vaccins