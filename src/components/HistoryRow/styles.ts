/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${Colors.background};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  font-size: 16px;
  color: ${Colors.text};
`
