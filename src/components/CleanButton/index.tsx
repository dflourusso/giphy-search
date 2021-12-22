import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { Container, Text } from './styles'

type IncrementButtonProps = {
  onPress?: () => void
}

const CleanButton: React.FC<IncrementButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={20}
        color={Colors.destructive}
      />
      <Text>Clean the history</Text>
    </Container>
  )
}

export default CleanButton
