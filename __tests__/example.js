import * as React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '../screens/HomeScreen'

it('Should be true', () => {
  expect(true).toBe(true)
})

it(`Should renders HomeScreen correctly`, () => {
  const tree = renderer.create(<HomeScreen>Snapshot test!</HomeScreen>).toJSON()

  expect(tree).toMatchSnapshot()
})
