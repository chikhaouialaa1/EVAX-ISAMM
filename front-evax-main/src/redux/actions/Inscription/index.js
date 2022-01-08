import * as types from "../../types/types"
import * as api from '../../../services/auth-Service'

export const inscription = (user) => async (dispatch) => {
  const user1 = await api.inscription(user)

  dispatch({
    type: types.INSCRIPTION,
    user: user1,
  })
}
