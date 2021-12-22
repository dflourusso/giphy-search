/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

const IMAGE_SIZE = Dimensions.get('window').width
const MODAL_TOP = Dimensions.get('window').height - IMAGE_SIZE - 72

export const Container = styled.View`
  flex: 1;
  padding-top: ${MODAL_TOP};
  background-color: ${Colors.modalBackdrop};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
  overflow: hidden;
`

export const CloseButton = styled.TouchableOpacity`
  padding-bottom: 16px;
`

export const Text = styled.Text`
  font-size: 16px;
  color: ${Colors.text};
  opacity: 0.8;
`

export const Image = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 100%;
  height: ${IMAGE_SIZE};
  border-radius: 4px;
  overflow: hidden;
`
