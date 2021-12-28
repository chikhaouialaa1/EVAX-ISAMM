import * as types from "../../types/types"
import * as api from '../../../services/center.service'

export const fetchCenters = () => async (dispatch) => {
    dispatch({
      type: types.FETCH_CENTER_REQUEST,
      
    })
       try {
         const tasks = await api.getCenter()
          dispatch({
            type: types.FETCH_CENTER_SUCCESS,
            tasks,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_CENTER_FAILURE,
        })
       }
 
 }
