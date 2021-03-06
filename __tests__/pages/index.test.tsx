import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import React from 'react'

import App from '../../pages/index'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />)

    expect(app.find('p').text()).toEqual('Hello World!')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})