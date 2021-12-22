import { createAction, createReducer } from '@reduxjs/toolkit'
import { Gif } from '../../services/gifs'

interface GifsState {
  data: Gif[]
  search: string
  page: number
}

const requestData = createAction('gifs/requestSearch')
const setSearch = createAction<string>('gifs/setSearch')
const setData = createAction<Gif[]>('gifs/setData')
const addPage = createAction('gifs/addPage')
const setPage = createAction<number>('gifs/setPage')

export const gifsActions = {
  requestData,
  setSearch,
  setData,
  addPage,
  setPage,
}

const initialState: GifsState = {
  data: [],
  search: '',
  page: 1,
}

export const gifsReducer = createReducer(initialState, {
  [setData.type]: (state, { payload }) => ({
    ...state,
    data: state.page === 1 ? payload : [...state.data, ...payload],
  }),
  [setSearch.type]: (state, { payload }) => ({
    ...state,
    search: payload,
    page: 1,
  }),
  [setPage.type]: (state, { payload }) => ({
    ...state,
    page: payload,
  }),
  [addPage.type]: (state) => ({
    ...state,
    page: state.page + 1,
  }),
})
