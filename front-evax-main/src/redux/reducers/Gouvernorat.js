import * as types from '../types/types'

const initialState = {
    loading: false,
    errors: false,
    listGovs: [],
    listVille: [],
}
const gouvernorat = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_GOV_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_GOV_SUCCESS:
            return { ...state, listGovs: [...action.gouvernorat], loading: false }
        case types.FETCH_GOV_FAILURE:
            return { ...state, error: true, loading: false }
        case types.FETCH_VILLE_REQUEST:
            return { ...state, loading: true, error: true }
        case types.FETCH_VILLE_SUCCESS:
            return { ...state, listVille: [...action.ville], loading: false }
        case types.FETCH_VILLE_FAILURE:
            return { ...state, error: true, loading: false }
        default:
            return state
    }

}
export default gouvernorat
