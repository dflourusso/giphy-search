import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const Header = styled.View`
  flex-direction: row;
  padding: 8px;
`

export const SearchInput = styled.TextInput.attrs(() => ({
  placeholder: 'Search for gifs...',
}))`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${Colors.backgroundInput};
  border-radius: 8px;
  margin: 4px;
  flex: 1;
`

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
