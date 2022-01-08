import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [], list2: [],
    selectedCenter:{},
  }

const centers = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_CENTER_VACCIN_BY_ID:{
            return{...state,
                list:[...state.list, action.center]}
        }case types.FETCH_CENTER_VACCIN:{
            return{...state,
                list2:[ action.center]}
        }
        case types.FETCH_CENTER_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_CENTER_SUCCESS:
            return { ...state, list: [...action.tasks], loading: false }
        case types.FETCH_CENTER_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_CENTER:
            return{...state,
            list:[...state.list, action.center]}
        case types.DELETE_CENTER:
            const newCenters = state.list.filter((center) => center._id !== action.id)
            return { ...state, list: newCenters }
        case types.FETCH_CENTER_BY_ID:
            return{...state,
            selectedCenter: action.center}
        case types.UPDATE_CENTER:
            const updatedCenters = state.list.map((center) => {
                if (center._id === action.id) {
                    return action.center
                }
                  return center
                })
                return { ...state, list: updatedCenters }
        default:
            return state
    }

}
export default centers