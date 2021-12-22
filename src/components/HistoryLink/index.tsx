import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { Container } from './styles'

type IncrementButtonProps = {
  onPress?: () => void
}

const SearchButton: React.FC<IncrementButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <MaterialCommunityIcons name="history" size={20} color={Colors.tint} />
    </Container>
  )
}

export default SearchButton
