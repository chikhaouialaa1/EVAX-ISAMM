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

export const addCenter = (center) => async (dispatch) => {
  const newCenter = await api.addCenter(center)

  dispatch({
    type: types.ADD_CENTER,
    center: newCenter,
  })
}
export const deleteCenter = (id) => async (dispatch) => {
  await api.deleteCenter(id)
  dispatch ( {
    type: types.DELETE_CENTER,
    id,
  })
}
