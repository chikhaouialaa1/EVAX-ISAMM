import * as types from "../../types/types";
import * as api from "../../../services/voluntary.service";

export const fetchVol = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_VOL_REQUEST,
  });
  try {
    const voluntaries = await api.getvoluntaries();
    dispatch({
      type: types.FETCH_VOL_SUCCESS,
      voluntaries,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_VOL_FAILURE,
    });
  }
};
export const addVol = (vol) => async (dispatch) => {
  const newVol = await api.addvoluntary(vol);

  dispatch({
    type: types.ADD_VOL,
    vol: newVol,
  });
};

export const fetchVolById = (id) => async (dispatch) => {
  const voluntary = await api.getvoluntaryID(id);

  dispatch({
    type: types.FETCH_VOL_BY_ID,
    voluntary,
  });
};
export const deleteVol = (id) => async (dispatch) => {
  await api.deleteVol(id);
  dispatch({
    type: types.DELETE_VOL,
    id,
  });
};
export const updateVol = (vol) => async (dispatch) => {
  const updatedVol = await api.updateVol(vol);
  console.log(vol);

  dispatch({
    type: types.UPDATE_VOL,

    vol: updatedVol,
  });
};
