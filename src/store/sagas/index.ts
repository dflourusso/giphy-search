import { all } from 'redux-saga/effects'
import gifs from './gifs'

function* rootSaga() {
  yield all([gifs()])
}

export default rootSaga
