import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './ducks/userReducer';
import cartReducer from './ducks/cartReducer';

const combinedReducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const middlewares = applyMiddleware(promiseMiddleware());

// {
//     user: {
//         // initialState from userReducer
//     },
//     cart: {
//         // initialState from cartReducer
//     }
// }

const store = createStore(combinedReducers, middlewares);

export default store;
