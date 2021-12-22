/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Container, Image } from './styles'

interface GifThumbProps {
  uri: string
  numberOfColumns?: number
  onPress?: () => void
}

const GifThumb: React.FC<GifThumbProps> = ({
  uri,
  numberOfColumns = 3,
  onPress = () => {},
}) => {
  return (
    <Container numberOfColumns={numberOfColumns} onPress={onPress}>
      <Image source={{ uri }} />
    </Container>
  )
}

export default GifThumb
