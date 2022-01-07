import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    listCenter:[],
    listPharmacie:[],
    selectedCenter:{},
  }

const centers = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_CENTER_VACCIN_BY_ID:{
            return{...state,
                list:[...state.list, action.center]}
        }
        case types.FETCH_CENTER_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_CENTER_SUCCESS:
            return { ...state, list: [...action.tasks],listCenter:[...action.centers], listPharmacie:[...action.pharmacie], loading: false }
        case types.FETCH_CENTER_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_CENTER:
            return{...state,
                listCenter:[...state.listCenter, action.center]}
        case types.ADD_PHARMACIE:
            return{...state,
                listPharmacie:[...state.listPharmacie, action.center]}
        case types.DELETE_CENTER:
            const newCenters = state.listCenter.filter((center) => center._id !== action.id)
            const newPharmacies = state.listPharmacie.filter((center) => center._id !== action.id)
            return { ...state, listCenter: newCenters,  listPharmacie:newPharmacies}
        case types.FETCH_CENTER_BY_ID:
            return{...state,
            selectedCenter: action.center}
        case types.UPDATE_CENTER:
            const updatedCenters = state.listCenter.map((center) => {
                if (center._id === action.id) {
                    return action.center
                }
                  return center
                })
                return { ...state, action, listCenter: updatedCenters }
        default:
            return state
    }

}
export default centers