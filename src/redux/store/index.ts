import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

export default () => {
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store as any
}
