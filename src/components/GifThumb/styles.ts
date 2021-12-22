/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const windowWidth = Dimensions.get('window').width

type ContainerProps = {
  numberOfColumns: number
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({ numberOfColumns }) => windowWidth / numberOfColumns};
  height: ${({ numberOfColumns }) => windowWidth / numberOfColumns};
  padding: 4px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
