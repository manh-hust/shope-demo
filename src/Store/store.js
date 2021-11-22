import rootReducer from '../reducer/index'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
    );

export default store