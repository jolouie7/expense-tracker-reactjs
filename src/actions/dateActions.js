import {
  LOAD_DATE,
} from "../constants/dates";

// update date in reducer
export const loadDate = (month, year) => {
  console.log(month)
  console.log(year)
  return (dispatch) => {
    dispatch({
      type: LOAD_DATE,
      payload: {month, year}
    })
  };
};