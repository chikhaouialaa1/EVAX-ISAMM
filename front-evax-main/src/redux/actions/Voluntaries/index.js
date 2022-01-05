import * as types from "../../types/types"
import * as api from '../../../services/voluntary.service'

export const fetchVol = () => async (dispatch) => {
    dispatch({
      type: types.FETCH_VOL_REQUEST,
      
    })
       try {
         const voluntaries = await api.getvoluntaries()
          dispatch({
            type: types.FETCH_VOL_SUCCESS,
            voluntaries,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_VOL_FAILURE,
        })
       }
 
 }
 export const addVol = (vol) => async (dispatch) => {
  const newVol = await api.addvoluntary(vol)

  dispatch({
    type: types.ADD_VOL,
    vol: newVol,
  })
}