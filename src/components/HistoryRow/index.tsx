import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Container, Text } from './styles'
import Colors from '../../constants/Colors'

interface HistoryRowProps {
  value: string
}

const HistoryRow: React.FC<HistoryRowProps> = ({ value }) => {
  return (
    <Container>
      <Text>{value}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color={Colors.backgroundInput}
      />
    </Container>
  )
}

export default HistoryRow
