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
  padding: 8px;
  background-color: ${Colors.backgroundInput};
  border-radius: 8px;
  margin-right: 8px;
  flex: 1;
`
