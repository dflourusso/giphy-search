import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Container, Text } from './styles'
import Colors from '../../constants/Colors'

type IncrementButtonProps = {
  onPress?: () => void
}

const SearchButton: React.FC<IncrementButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <MaterialCommunityIcons name="magnify" size={20} color={Colors.tint} />
    </Container>
  )
}

export default SearchButton
