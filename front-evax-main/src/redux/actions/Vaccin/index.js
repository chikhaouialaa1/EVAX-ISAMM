import * as types from "../../types/types"
import * as api from '../../../services/vaccin.service'

export const fetchVaccins = () => async (dispatch) => {
    dispatch({
      type: types.FETCH_VACCIN_REQUEST,
      
    })
       try {
         const tasks = await api.getVaccin()
          dispatch({
            type: types.FETCH_VACCIN_SUCCESS,
            tasks,
          })
       } catch (e) {
        dispatch({
          type: types.FETCH_VACCIN_FAILURE,
        })
       }
 
 }

export const addVaccin = (vaccin) => async (dispatch) => {
  const newVaccin = await api.addVaccin(vaccin)

  dispatch({
    type: types.ADD_VACCIN,
    vaccin: newVaccin,
  })
}
export const deleteVaccin = (id) => async (dispatch) => {
  await api.deleteVaccin(id)
  dispatch ( {
    type: types.DELETE_VACCIN,
    id,
  })
}
export const fetchVaccinById = (id) => async (dispatch) => {
  const vaccin = await api.fetchVaccinById(id)
  dispatch ( {
    type: types.FETCH_VACCIN_BY_ID,
    vaccin,
  })
}
export const updateVaccin = (id, vaccin) => async (dispatch) => {
  const updatedVaccin = await api.updateVaccin(id, vaccin)

  dispatch ( {
    type: types.UPDATE_VACCIN,
    id,
    vaccin: updatedVaccin,
  })
}

export const addCenterVaccin = (vaccin) => async (dispatch) => {
  const newVaccin = await api.addCenterVaccin(vaccin)

  dispatch({
    type: types.ADD_CENTER_VACCIN,
    vaccin: newVaccin,
  })
}