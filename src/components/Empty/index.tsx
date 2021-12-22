import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import Colors from '../../constants/Colors'
import { Circle, Container, InfoText } from './styles'

const Empty: React.FC = () => {
  return (
    <Container>
      <Circle>
        <MaterialCommunityIcons
          name="image-search-outline"
          size={50}
          color={Colors.tint}
        />
      </Circle>
      <InfoText>No gif where found, try typing something to search</InfoText>
    </Container>
  )
}

export default Empty
