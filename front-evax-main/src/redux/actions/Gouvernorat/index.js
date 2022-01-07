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
 export const fetchVille = (idGov) => async (dispatch) => {
  dispatch({
    type: types.FETCH_VILLE_REQUEST,
    
  })
  
  function filterByID(item) {
    if (item.gouvernorat._id ===idGov) {
      return true
    }
    return false;
  }
     try {
       const villes = await api.getVille()

       let ville = villes.filter(filterByID)
        dispatch({
          type: types.FETCH_VILLE_SUCCESS,
          ville,
        })
     } catch (e) {
      dispatch({
        type: types.FETCH_VILLE_FAILURE,
      })
     }

}