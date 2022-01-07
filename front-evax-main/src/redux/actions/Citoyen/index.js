import * as types from "../../types/types"
import * as api from '../../../services/citoyen.service'

export const rdv = (token,id_center) => async (dispatch) => {
  const user1 = await api.rdv(token,id_center)

  dispatch({
    type: types.RDV,
    user: user1,
  })
}