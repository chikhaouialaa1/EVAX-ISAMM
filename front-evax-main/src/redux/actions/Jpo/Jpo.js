import * as types from "../../types/types"
import * as api from '../../../services/jpo-sevices'

export const fetchJpos = () => async (dispatch) => {
    
      dispatch({
        type: types.FETCH_JPO_REQUEST,
        
      })
         try {
           const jpos = await api.getJpo()
            dispatch({
              type: types.FETCH_JPO_SUCCESS,
              jpos,
            })
         } catch (e) {
          dispatch({
            type: types.FETCH_JPO_FAILURE,
          })
         }
   
   }
export const addJpo = (jpo) => async (dispatch) => {
    const newJpo = await api.addJpo(jpo)
  
    dispatch({
      type: types.ADD_JPO,
      jpo: newJpo,
    })
  }
export const deleteJpo = (id) => async (dispatch) => {
    await api.deleteJpo(id)
    dispatch ( {
      type: types.DELETE_JPO,
      id,
    })
  }

export const fetchJpoById = (id) => async (dispatch) => {
    const jpo = await api.fetchJpoById(id)
    dispatch ( {
      type: types.FETCH_JPO_BY_ID,
      jpo,
    })
  }
