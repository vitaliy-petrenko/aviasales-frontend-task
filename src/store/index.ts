import { applyMiddleware, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import * as reduxLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, rootSaga } from './root'

const
  sagaMiddleware = createSagaMiddleware(),
  middlewares: Middleware[] = [thunk, sagaMiddleware],
  isDevMode = process.env.NODE_ENV === 'development'

if (isDevMode) {
  middlewares.push(reduxLogger.createLogger())
}

let enhancer = applyMiddleware(...middlewares)

if (isDevMode) {
  enhancer = composeWithDevTools(enhancer)
}

const store = enhancer(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
