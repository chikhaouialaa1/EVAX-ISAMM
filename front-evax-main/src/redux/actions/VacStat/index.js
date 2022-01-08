import * as types from "../../types/types";
import * as api from "../../../services/stat.service";

// Stat VAccin
export const fetchVacStat = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_VACSTAT_REQUEST,
  });
  try {
    const vacStat = await api.getVaccinStat();
    dispatch({
      type: types.FETCH_VACSTAT_SUCCESS,
      vacStat,
    });
    
  } catch (e) {
    dispatch({
      type: types.FETCH_VACSTAT_FAILURE,
    });
  }
};



