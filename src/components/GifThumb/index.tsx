import React from 'react'
import { Container, Image } from './styles'

interface GifThumbProps {
  uri: string
  numberOfColumns?: number
}

const GifThumb: React.FC<GifThumbProps> = ({ uri, numberOfColumns = 3 }) => {
  return (
    <Container numberOfColumns={numberOfColumns}>
      <Image source={{ uri }} />
    </Container>
  )
}

export default GifThumb
