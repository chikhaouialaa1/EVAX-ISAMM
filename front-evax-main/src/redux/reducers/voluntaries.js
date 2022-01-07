import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    selectedVol:{},
  }

const voluntaries = (state = initialState, action) =>{
    switch(action.type){
        case types.ADD_VOL:
            return{...state,
                list:[...state.list, action.vol]}
        case types.FETCH_VOL_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VOL_SUCCESS:
            return { ...state, list: [...action.voluntaries], loading: false }
        case types.FETCH_VOL_FAILURE:
            return { ...state, error: true, loading: false }
        case types.FETCH_VOL_BY_ID:
            return{...state,
                    selectedVol: action.voluntary}
        case types.DELETE_VOL:
            const newvols = state.list.filter((volontaire) => volontaire._id !== action.id)
            return { ...state, list: newvols }
        case types.UPDATE_VOL:
            const updatevols = state.list.map((volontaire) => {
                if (volontaire._id === action.id) {
                    return action.volontaire
                }
                  return volontaire
                })
                return { ...state, list: updatevols }
        default:
            return state
    }

}
export default voluntaries