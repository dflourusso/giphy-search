import * as React from 'react'
import { Container, Text } from './styles'

type IncrementButtonProps = {
  onPress?: () => void
}

const IncrementButton: React.FC<IncrementButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <Text>Increment</Text>
    </Container>
  )
}

export default IncrementButton
