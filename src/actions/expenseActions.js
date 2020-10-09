import axios from "axios";

import {
  GET_EXPENSES,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  EXPENSES_LOADING
} from "../constants/expense";
import backendHost from "../constants/api-config";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

// Get all expenses
export const getExpenses = () => {
  return (dispatch, getState) => {
    dispatch(setItemsLoading());
    axios
      .get(`${backendHost}/api/expenses`, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: GET_EXPENSES,
          payload: res.data,
        })
      )
      .catch((error) => {
        dispatch(returnErrors(error.response.data, error.response.status));
      });
  };
};

// Create an expense
export const addExpense = (expense) => {
  // console.log(expense);
  return (dispatch, getState) => {
    axios
      // tokenConfig(getState), is attaching the token to the request in the header
      // .post(`${backendHost}/api/expenses`, expense, tokenConfig(getState))
      .post(
        `http://localhost:5000/api/expenses`,
        expense,
        tokenConfig(getState)
      )
      .then((res) =>
        dispatch({
          type: ADD_EXPENSE,
          payload: res.data,
        })
        // console.log(res)
      )
      .catch((error) => {
        dispatch(returnErrors(error.response.data, error.response.status));
      });
  };
};


// Update an expense
export const updateExpense = (id, expense) => {
  return (dispatch, getState) => {
    // tokenConfig(getState), is attaching the token to the request in the header
    const newExpense = {
      description: expense.description,
      amount: expense.amount,
      category: expense.category,
    };

    axios
      .patch(`${backendHost}/api/expenses/${id}`, newExpense, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: UPDATE_EXPENSE,
          payload: res.data,
        }),
        console.log("successful update")
      )
      .catch((error) => {
        dispatch(returnErrors(error.response.data, error.response.status));
      });
  };
};

// Delete an expense
export const deleteExpense = (id) => {
  return (dispatch, getState) => {
    // tokenConfig(getState), is attaching the token to the request in the header
    axios
      .delete(`${backendHost}/api/expenses/${id}`, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: DELETE_EXPENSE,
          payload: res.data,
        })
      )
      .catch((error) => {
        dispatch(returnErrors(error.response.data, error.response.status));
      });
  };
};

// Fetching expenses
export const setItemsLoading = () => {
  return {
    type: EXPENSES_LOADING,
  };
};