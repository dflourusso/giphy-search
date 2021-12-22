/* eslint-disable @typescript-eslint/no-empty-function */
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import Colors from '../../constants/Colors'
import { Container, Text } from './styles'

interface HistoryRowProps {
  value: string
  onPress?: () => void
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  value,
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
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
