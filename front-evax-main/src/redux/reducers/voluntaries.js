import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
    listVC:[],
    listTest:[],
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
        case types.ADD_VOL:
            return{...state,
                    list:[...state.list, action.vol]}
        case types.FETCH_VOL_By_Center_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VOL_By_Center_SUCCESS:
            return { ...state, listVC: [...action.volantaire], listTest:[...action.voluntaries], loading: false }
        case types.FETCH_VOL_By_Center_FAILURE:
            return { ...state, error: true, loading: false }
        default:
            return state
    }

}
export default voluntaries