import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IncrementButton from '../../components/IncrementButton'
import { RootState } from '../../store'
import { helloActions } from '../../store/ducks/hello'
import { Container, Title } from './styles'

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.helloReducer.counter)

  return (
    <Container>
      <Title>Home Screen {counter}</Title>
      <IncrementButton onPress={() => dispatch(helloActions.increment())} />
    </Container>
  )
}

export default HomeScreen
