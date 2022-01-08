import * as types from "../types/types";
const initialState = {
  statisticLoading: true,
  errors: false,
  list: [],
};

const statistic = (state = initialState, action) => {
  switch (action.type) {

    //reducer of statistic
    case types.STATISTIC_REQUEST:
      return {...state, statisticLoading: false, errors: true};
    case types.STATISTIC_SUCCESS:
      return {...state,list:[...action.statistic], statisticLoading: false, errors: false};
    case types.STATISTIC_FAILURE:
      return {...state, statisticLoading: true, errors: true}

    default:
      return state;
  }
};
export default statistic;
