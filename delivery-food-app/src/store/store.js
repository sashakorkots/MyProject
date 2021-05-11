import { createStore, applyMiddleware, compose } from 'react';
import reducers from './reducers'
import thunk from 'redux-thunk'

const composedEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
    reducers,
    composedEnhanced(
        applyMiddleware(
            thunk
        )
    )
);

export default configureStore;