import { combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
// import {  } from "module"; //reducers

const storeConfig = () => {
    const loggerMiddleware = createLogger();
    const middlewares = [thunkMiddleware, loggerMiddleware];
    const store = createStore(
        combineReducers({}),
        composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store;
}
export default storeConfig;