import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;
