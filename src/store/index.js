import { combineReducers } from "redux";
import builderReducers from './reducers'
export default combineReducers({
    store: builderReducers
})