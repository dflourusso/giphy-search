import { AnyAction, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './ducks'
import rootSaga from './sagas'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'reset') {
    return reducers(undefined, action)
  }

  return reducers(state, action)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
