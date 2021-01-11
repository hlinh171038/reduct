 import { combineReducer } from 'react-redux'
 import hobbyReducer from './hobby';
 import userReducer from './user';
 const rootReducer = combineReducer({
    hobby:hobbyReducer,
    user:userReducer
 })

 export default rootReducer;
