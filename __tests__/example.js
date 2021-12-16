import * as React from 'react'
import renderer from 'react-test-renderer'
import IncrementButton from '../src/components/IncrementButton'

it('Should be true', () => {
  expect(true).toBe(true)
})

it(`Should renders HomeScreen correctly`, () => {
  const tree = renderer.create(<IncrementButton>Snapshot test!</IncrementButton>).toJSON()

  expect(tree).toMatchSnapshot()
})
