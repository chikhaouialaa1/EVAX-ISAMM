import * as types from "../../types/types";
import * as api from "../../../services/contact.service";

export const addMsg = (message) => async (dispatch) => {
  const newMsg = await api.addMsg(message);

  dispatch({
    type: types.ADD_MSG,
    message: newMsg,
  });
  console.log(message);
};


export const fetchMessages = () => async (dispatch) => {
  const  messages  = await api.getMsg();
  dispatch({
    type: types.FETCH_MSG_REQUEST,
  });
  try {
    
    dispatch({
      type: types.FETCH_MSG_SUCCESS,
      messages,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_MSG_FAILURE,
    });
  }
};

