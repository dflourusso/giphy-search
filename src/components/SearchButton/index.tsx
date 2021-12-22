import * as React from 'react'
import { Container, Text } from './styles'

type IncrementButtonProps = {
  onPress?: () => void
}

const SearchButton: React.FC<IncrementButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <Text>Search</Text>
    </Container>
  )
}

export default SearchButton
