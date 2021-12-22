import { NavigationProp, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import { RootStackParamList } from '../../../types'
import HistoryRow from '../../components/HistoryRow'
import historyService from '../../services/history'
import { gifsActions } from '../../store/ducks/gifs'
import { Container, ItemSeparatorComponent, styles } from './styles'

const HistoryScreen: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [data, setData] = React.useState<string[]>([])

  React.useEffect(() => {
    historyService.retrive().then(setData)
  }, [])

  const onPressItem = React.useCallback(
    (search: string) => {
      dispatch(gifsActions.setSearch(search))
      dispatch(gifsActions.requestData())
      navigation.goBack()
    },
    [dispatch, navigation],
  )

  return (
    <Container>
      <FlatList
        contentContainerStyle={
          data.length === 0 ? styles.contentContainer : null
        }
        data={data}
        keyExtractor={(p) => p}
        renderItem={({ item }) => (
          <HistoryRow value={item} onPress={() => onPressItem(item)} />
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </Container>
  )
}

export default HistoryScreen
