import { createAction, createReducer } from '@reduxjs/toolkit'

interface HelloState {
  counter: number
}

const increment = createAction<void>('hello/increment')
const setCounter = createAction<number>('hello/setCounter')

export const helloActions = {
  increment,
  setCounter,
}

const initialState: HelloState = {
  counter: 0,
}

export const helloReducer = createReducer(initialState, {
  [increment.type]: (state) => ({
    ...state,
    counter: state.counter + 1,
  }),
  [setCounter.type]: (state, { payload }) => ({
    ...state,
    counter: payload,
  }),
})
