import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk';

import rootReducer, { initialState as state } from './reducer';
import { IReduxState } from '../types/reducer'


export default ((initialState = state): Store<IReduxState> => {
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    )

    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept(() => {
            const nextRootReducer = require('./reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store as any;
})()
