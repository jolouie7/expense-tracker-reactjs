import {
  LOAD_DATE,
} from "../constants/dates";

// update date in reducer
export const loadDate = (month, year) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_DATE,
      payload: {month, year}
    })
  };
};