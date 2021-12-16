import { select, takeEvery } from 'redux-saga/effects'
import { RootState } from '..'
import { helloActions } from '../ducks/hello'

function counterSelector(state: RootState): number | undefined {
  return state.helloReducer.counter
}

type counterSelectorType = ReturnType<typeof counterSelector>

export function* onIncrement() {
  const counter = (yield select(counterSelector)) as counterSelectorType
  console.log(`Counter: ${counter}`)
}

export default function* helloSaga() {
  yield takeEvery(helloActions.increment.type, onIncrement)
}
