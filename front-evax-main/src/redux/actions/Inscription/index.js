import * as types from "../../types/types"
import * as api from '../../../services/vaccin.service'

export const inscription1 = (user) => async (dispatch) => {

  dispatch({
    type: types.INSCRIPTION,
    user: user,
  })
}