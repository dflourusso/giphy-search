import * as React from 'react'
import { FlatList } from 'react-native'
import HistoryRow from '../../components/HistoryRow'
import historyService from '../../services/history'
import { Container, ItemSeparatorComponent, styles } from './styles'

const HistoryScreen: React.FC = () => {
  const [data, setData] = React.useState<string[]>([])

  React.useEffect(() => {
    historyService.retrive().then(setData)
  }, [])

  return (
    <Container>
      <FlatList
        contentContainerStyle={
          data.length === 0 ? styles.contentContainer : null
        }
        data={data}
        keyExtractor={(p) => p}
        renderItem={({ item }) => <HistoryRow value={item} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </Container>
  )
}

export default HistoryScreen
