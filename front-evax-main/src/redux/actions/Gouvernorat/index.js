import * as types from "../../types/types"
import * as api from '../../../services/center.service'

export const fetchGov = () => async (dispatch) => {
    dispatch({
      type: types.FETCH_GOV_REQUEST,
      
    })
       try {
         const gouvernorat = await api.getGouvernorat()
          dispatch({
            type: types.FETCH_GOV_SUCCESS,
            gouvernorat,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_GOV_FAILURE,
        })
       }
 
 }