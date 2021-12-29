import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
  }

const centers = (state = initialState, action) =>{
    switch(action.type){
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
        default:
            return state
    }

}
export default centers