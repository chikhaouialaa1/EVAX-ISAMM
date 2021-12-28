import * as types from "../types/types";

const initialState = {
  loading: false,
  errors: false,
  list: [],
};
const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MSG:
      return {
        ...state,
        list: [...state.list, action.message],
        
        
      };
    
    default:
      return state;
  }
  
};
export default messages;
