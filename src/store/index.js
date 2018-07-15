import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
