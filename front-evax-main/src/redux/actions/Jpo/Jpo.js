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
export const localStock = (id) => async (dispatch) => {
    
    dispatch ( {
      type: types.LOCAL_STOCK,
      id,
    })
  }
export const affectCenterJpo = (centerJpo) => async (dispatch) => {
    const jpoCenter = await api.affectVaccinJpo(centerJpo)
    dispatch ( {
      type: types.AFFECT_CENTER_JPO,
      jpoCenter,
    })
  }
export const fetchJpoAllCenters = (jpoId) => async (dispatch) => {
  dispatch({
    type: types.FETCH_ALL_JPO_CENTERS_REQUEST,
    
  })
     try {
      const jpoCenters = await api.getAllJpoCenters(jpoId)
      console.log("tessssssssssssssssst"+jpoCenters)
        dispatch({
          type: types.FETCH_ALL_JPO_CENTERS_SUCCESS,
          jpoCenters,
        })
     } catch (e) {
      dispatch({
        type: types.FETCH_ALL_JPO_CENTERS_FAILURE,
      })
     }
  }

export const deleteCenterFromJpo = (jpoCenter) => async (dispatch) => {
    await api.deleteCenterFromJpo(jpoCenter)
    dispatch ( {
      type: types.DELETE_JPO_CENTERS,
      jpoCenter,
    })
  }
