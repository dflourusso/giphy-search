import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import Colors from '../../constants/Colors'
import { Circle, Container, InfoText } from './styles'

const EmptyHistory: React.FC = () => {
  return (
    <Container>
      <Circle>
        <MaterialCommunityIcons name="history" size={50} color={Colors.tint} />
      </Circle>
      <InfoText>No search has been done yet.</InfoText>
    </Container>
  )
}

export default EmptyHistory
