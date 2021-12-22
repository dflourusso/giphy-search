import { NavigationProp, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootStackParamList } from '../../../types'
import GifThumb from '../../components/GifThumb'
import HistoryLink from '../../components/HistoryLink'
import SearchButton from '../../components/SearchButton'
import { RootState } from '../../store'
import { gifsActions } from '../../store/ducks/gifs'
import { Container, Header, SearchInput } from './styles'

const NUMBER_OF_COLUMNS = 3

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()
  const { data, search } = useSelector((state: RootState) => state.gifsReducer)

  const onSearch = React.useCallback(() => {
    dispatch(gifsActions.setPage(1))
    dispatch(gifsActions.requestData())
  }, [dispatch])

  const onChangeText = React.useCallback(
    (text: string) => {
      dispatch(gifsActions.setSearch(text))
    },
    [dispatch],
  )

  const addPage = () => {
    dispatch(gifsActions.addPage())
  }

  return (
    <Container>
      <Header>
        <SearchInput value={search} onChangeText={onChangeText} />
        <SearchButton onPress={onSearch} />
        <HistoryLink onPress={() => navigation.navigate('HistoryScreen')} />
      </Header>
      <FlatList
        numColumns={NUMBER_OF_COLUMNS}
        data={data}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <GifThumb
            numberOfColumns={NUMBER_OF_COLUMNS}
            uri={item.images.original.url}
          />
        )}
        scrollEventThrottle={16}
        onEndReached={addPage}
      />
    </Container>
  )
}

export default HomeScreen
