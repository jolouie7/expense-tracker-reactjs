import { LOAD_DATE } from "../constants/dates";

const currentDate = new Date();

const initialState = {
  month: currentDate.getMonth() + 1,
  year: currentDate.getFullYear(),
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATE:
      return {
        ...state,
        month: action.payload.month,
        year: action.payload.year,
      };

    default:
      return state;
  }
};

export default dateReducer;
