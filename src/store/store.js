import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';


const composeEnhacers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk))
);