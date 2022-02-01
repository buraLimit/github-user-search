import { combineReducers } from "redux";
import users from "../../users/state/usersReducer";

const rootReducer = combineReducers({
    users,
});

export default rootReducer;
