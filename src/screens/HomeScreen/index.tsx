import { NavigationProp, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootStackParamList } from '../../../types'
import Empty from '../../components/Empty'
import GifModal from '../../components/GifModal'
import GifThumb from '../../components/GifThumb'
import HistoryLink from '../../components/HistoryLink'
import SearchButton from '../../components/SearchButton'
import { RootState } from '../../store'
import { gifsActions } from '../../store/ducks/gifs'
import { Container, Header, SearchInput, styles } from './styles'

const NUMBER_OF_COLUMNS = 3

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()
  const [selectedGif, setSelectedGif] = React.useState<string>()
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
        contentContainerStyle={
          data.length === 0 ? styles.contentContainer : null
        }
        numColumns={NUMBER_OF_COLUMNS}
        data={data}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <GifThumb
            numberOfColumns={NUMBER_OF_COLUMNS}
            uri={item.images.original.url}
            onPress={() => setSelectedGif(item.images.original.url)}
          />
        )}
        scrollEventThrottle={16}
        onEndReached={addPage}
        ListEmptyComponent={Empty}
      />
      <GifModal url={selectedGif} onClose={() => setSelectedGif(undefined)} />
    </Container>
  )
}

export default HomeScreen
