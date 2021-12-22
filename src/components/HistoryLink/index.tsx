import * as React from 'react'
import { Container, Text } from './styles'

type HistoryLinkProps = {
  onPress?: () => void
}

const HistoryLink: React.FC<HistoryLinkProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress = () => {},
}) => {
  return (
    <Container onPress={onPress}>
      <Text>Search history</Text>
    </Container>
  )
}

export default HistoryLink
