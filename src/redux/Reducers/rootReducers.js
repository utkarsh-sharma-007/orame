import { combineReducers } from 'redux';
import tableReducer from './tableReducers'
// import productReducer from './productReducers'
// import productFilterReducer from './productFilterReducers'
// import cartReducer from './cartReducers'

const rootReducer = combineReducers({
  table: tableReducer
});

export default rootReducer;
