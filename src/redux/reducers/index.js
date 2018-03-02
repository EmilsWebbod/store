import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './modules/counter';
import filters from './filter/filters'
import api from './api/api.store'
import shopping from "./shopping/shopping";
import cart from "./cart/cart";

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  filters,
  api,
  shopping,
  cart
});

export default rootReducer;
