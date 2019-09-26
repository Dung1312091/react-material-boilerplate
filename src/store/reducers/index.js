/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router/immutable";

import history from "../../configs/history";
/** import main reducer load sync */
import commonsReducer from "./commons";
import layoutReducer from "./layout";
import languageProviderReducer from "../../containers/LanguageProvider/reducer";
import homeReducer from "../../containers/Home/reducer";

const createReducer = (injectedReducers = {}) => (state, action) =>
  combineReducers({
    router: connectRouter(history),
    language: languageProviderReducer,
    commonsReducer,
    layoutReducer,
    homeReducer,
    ...injectedReducers
  })(action.type === "LOGOUT_SUCCESS" ? undefined : state, action);
export default createReducer;
