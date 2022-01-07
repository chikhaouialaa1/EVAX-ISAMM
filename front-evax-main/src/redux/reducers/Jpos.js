import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    listJpo: [],
    selectedJpo:{},
  }

  const Jpos = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_JPO_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_JPO_SUCCESS:
            return { ...state, listJpo: [...action.jpos], loading: false }
        case types.FETCH_JPO_FAILURE:
            return { ...state, error: true, loading: false }
        case types.ADD_JPO:
            return{...state,
                listJpo:[...state.listJpo, action.jpo]}
        case types.DELETE_JPO:
            const newJpo = state.listJpo.filter((jpo) => jpo._id !== action.id)
            return { ...state, listJpo: newJpo}
        case types.FETCH_JPO_BY_ID:
            return{...state,
                selectedJpo: action.jpo}
        default:
            return state
    }

}
export default Jpos