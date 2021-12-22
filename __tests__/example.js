import * as React from 'react'
import renderer from 'react-test-renderer'
import SearchButton from '../src/components/SearchButton'

it('Should be true', () => {
  expect(true).toBe(true)
})

it(`Should renders HomeScreen correctly`, () => {
  const tree = renderer.create(<SearchButton>Snapshot test!</SearchButton>).toJSON()

  expect(tree).toMatchSnapshot()
})
