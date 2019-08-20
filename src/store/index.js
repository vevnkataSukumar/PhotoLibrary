import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from '../Reducers/';

const initialMiddleware = [];
initialMiddleware.push(thunk);

const middleware = compose(applyMiddleware(...initialMiddleware));

const store = createStore(appReducers, middleware);

export default store;