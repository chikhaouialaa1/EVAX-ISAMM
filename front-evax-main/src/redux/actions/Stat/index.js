import * as types from "../../types/types";
import * as api from "../../../services/stat.service";

export const statistic = () => async (dispatch) => {
    dispatch({
      type: types.STATISTIC_REQUEST,
    });
    try {
      const countAll = await api.countAll();
      const count1 = await api.countDose1();
      const count2 = await api.countDose2();
      dispatch({
        type: types.STATISTIC_SUCCESS,
        countAll,
        count1,
        count2,
      });
      
    } catch (e) {
      dispatch({
        type: types.STATISTIC_FAILURE,
      });
   
    }
  };