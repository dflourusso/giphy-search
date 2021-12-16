import { all } from 'redux-saga/effects'
import hello from './hello'

function* rootSaga() {
  yield all([hello()])
}

export default rootSaga
