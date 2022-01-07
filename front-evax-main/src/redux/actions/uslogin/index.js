import * as types from "../../types/types";
import * as api from "../../../services/auth-Service";

export const login = (email,password) => async (dispatch) => {
  const loginMsg = await api.loginservice(email,password); 
   
  dispatch({
    type: types.GET_USER_TOKEN,
    message: loginMsg,
  });
};


