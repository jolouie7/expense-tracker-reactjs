import {
  GET_EXPENSES,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  EXPENSES_LOADING,
} from "../constants/expense";

const initialState = {
  expenses: [],
  loading: false,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };

    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    // TODO: Either update is the same as GET_EXPENSE or filter through to find the 1 expense and replace it with the new expense
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== action.payload),
      };

    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== action.payload),
      };

    case EXPENSES_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default expenseReducer;