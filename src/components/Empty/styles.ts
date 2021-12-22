/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.View`
  padding: 40px;
  justify-content: center;
  align-items: center;
`

export const Circle = styled.View`
  background-color: ${Colors.backgroundInput};
  padding: 40px;
  border-radius: 50%;
`

export const InfoText = styled.Text`
  font-size: 14px;
  color: ${Colors.text};
  opacity: 0.8;
  text-align: center;
  margin-top: 16px;
`
