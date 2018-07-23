import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';
import { LOG_OUT } from '../actions/types';

const appReducers = combineReducers(reducers);

const reducer = (state, action) => appReducers(action.type === LOG_OUT ? undefined : state, action);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
