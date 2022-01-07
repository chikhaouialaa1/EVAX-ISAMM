import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    listJpo: [],
    selectedJpo:{},
    listTemp:[],
    listcenterJpo:[],
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
        case types.LOCAL_STOCK:
            return{...state,
                listTemp:[...state.listTemp, action.id] }
        case types.AFFECT_CENTER_JPO:
            return{...state,
                listcenterJpo:[...state.listcenterJpo, action.jpoCenter]}
        case types.FETCH_ALL_JPO_CENTERS_REQUEST:
                return { ...state, loading: true, error: true }
        case types.FETCH_ALL_JPO_CENTERS_SUCCESS:
                return { ...state, listcenterJpo: [...action.jpoCenters], loading: false }
        case types.FETCH_ALL_JPO_CENTERS_FAILURE:
                return { ...state, error: true, loading: false }
        case types.DELETE_JPO_CENTERS:
            return { ...state}
        default:
            return state
    }

}
export default Jpos