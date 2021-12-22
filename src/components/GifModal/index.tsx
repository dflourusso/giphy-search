/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Modal } from 'react-native'
import { Container, Content, Text, Image, CloseButton } from './styles'

interface GifModalProps {
  url?: string
  onClose?: () => void
}

const GifModal: React.FC<GifModalProps> = ({ url, onClose = () => {} }) => {
  return (
    <Modal visible={!!url} transparent onRequestClose={onClose}>
      <Container>
        <Content>
          <CloseButton onPress={onClose}>
            <Text>Close</Text>
          </CloseButton>
          <Image source={{ uri: url }} />
        </Content>
      </Container>
    </Modal>
  )
}

export default GifModal
