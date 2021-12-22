/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${Colors.backgroundInput};
  border-radius: 4px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`
export const Text = styled.Text`
  font-size: 18px;
  color: ${Colors.destructive};
  padding-left: 8px;
`
