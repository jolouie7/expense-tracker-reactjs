// Assuming you have more then one reducer
import { combineReducers } from "redux";
// import itemReducer from "./itemReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  // itemReducer,
  authReducer,
  errorReducer,
  usersReducer,
});
