import * as types from "../../types/types"
import * as api from '../../../services/center.service'

export const fetchCenters = () => async (dispatch) => {
  function filterByPharmacie(item) {
    return item.isPharmacie;
  }
  function filterByCenter(item) {
    if (item.isPharmacie ==false) {
      return true
    }
    return false;
  }
    dispatch({
      type: types.FETCH_CENTER_REQUEST,
      
    })
       try {
         const tasks = await api.getCenter()
         let pharmacie = tasks.filter(filterByPharmacie)
         let centers = tasks.filter(filterByCenter)
          dispatch({
            type: types.FETCH_CENTER_SUCCESS,
            tasks,
            centers,
            pharmacie,
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
export const addPharmacie = (pharmacie) => async (dispatch) => {
  const newPharmacie = await api.addCenter(pharmacie)

  dispatch({
    type: types.ADD_PHARMACIE,
    center: newPharmacie,
  })
}
export const deleteCenter = (id) => async (dispatch) => {
  await api.deleteCenter(id)
  dispatch ( {
    type: types.DELETE_CENTER,
    id,
  })
}
export const fetchCenterById = (id) => async (dispatch) => {
  const center = await api.fetchCenterById(id)
  dispatch ( {
    type: types.FETCH_CENTER_BY_ID,
    center,
  })
}
export const fetchCenterVaccinById = (id) => async (dispatch) => {
  const center = await api.fetchCenterVaccinById(id)
  dispatch ( {
    type: types.FETCH_CENTER_VACCIN_BY_ID,
    center,
  })
}
export const updateCenter = (id, center) => async (dispatch) => {
  const updatedCenter = await api.updateCenter(id, center)

  dispatch ( {
    type: types.UPDATE_CENTER,
    id,
    center: updatedCenter,
  })
}
