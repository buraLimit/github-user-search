import initialState from "../../state/reducers/initialState";
import * as types from "./actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SEARCHED_USER: 
      
      return {
        ...state,
        info: action.payload
      };
      case types.GET_USER_REPO: 
        return{
          ...state,
          repos: action.payload
        };
      case types.GET_USER_STAR: 
        return{
          ...state,
          starred: action.payload
        };
      case types.GET_USER_GISTS: 
        return{
          ...state,
          gists: action.payload
        };
      case types.GET_SEARCH: 
        return{
          ...state,
          search: action.payload
        };
      default:
        return state;
  }
}
