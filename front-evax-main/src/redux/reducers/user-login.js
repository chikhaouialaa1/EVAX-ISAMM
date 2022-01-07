import * as types from "../types/types";

const initialState = {
  loading: false,
  errors: false,
  list: [],
};
const userlogin = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_TOKEN:
    return {
        ...state,
        list: [...state.list, action.message],
      };
    case types.FETCH_MSG_REQUEST:
      return { ...state, loading: true, error: true };
    case types.FETCH_MSG_SUCCESS:
      return { ...state,list:[...action.userlogin], loading: false };
    case types.FETCH_MSG_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};
export default userlogin;
