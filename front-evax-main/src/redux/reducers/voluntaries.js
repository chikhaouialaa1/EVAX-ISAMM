import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    list: [],
  }

const voluntaries = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_VOL_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VOL_SUCCESS:
            return { ...state, list: [...action.voluntaries], loading: false }
        case types.FETCH_VOL_FAILURE:
            return { ...state, error: true, loading: false }
        default:
            return state
    }

}
export default voluntaries