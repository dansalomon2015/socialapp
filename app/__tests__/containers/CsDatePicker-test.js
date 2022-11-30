import React from 'react'
import renderer from 'react-test-renderer'
import CsDatePicker from '../../containers/CsDatePicker'

test('renders correctly', () => {
  const tree = renderer.create(<CsDatePicker />).toJSON()
  expect(tree).toMatchSnapshot()
})
