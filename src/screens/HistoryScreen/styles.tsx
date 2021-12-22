import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 8px;
`

export const ItemSeparatorComponent = styled.View`
  width: 100%;
  height: 8px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
