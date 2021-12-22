import { call, put, select, takeEvery } from 'redux-saga/effects'
import { RootState } from '..'
import gifService, { Gif } from '../../services/gifs'
import historyService from '../../services/history'
import { gifsActions } from '../ducks/gifs'

type SearchParamsSelector = {
  search: string
  page: number
}

function searchParamsSelector(state: RootState): SearchParamsSelector {
  const { search, page } = state.gifsReducer
  return { search, page }
}

export function* resquestSearch() {
  const { search, page } = (yield select(
    searchParamsSelector,
  )) as SearchParamsSelector
  const data = (yield call(gifService.search, { search, page })) as Gif[]

  yield put(gifsActions.setData(data))
}

export function* storeSearchKeyword() {
  const { search } = (yield select(
    searchParamsSelector,
  )) as SearchParamsSelector
  yield call(historyService.save, search)
}

export default function* gifsSaga() {
  yield takeEvery(gifsActions.requestData.type, resquestSearch)
  yield takeEvery(gifsActions.requestData.type, storeSearchKeyword)
  yield takeEvery(gifsActions.addPage.type, resquestSearch)
}
