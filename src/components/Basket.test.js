import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Basket from './Basket'

const basketProps = {
  products: [
    { id: '001', name: 'test-name', price: 1.5 },
    { id: '002', name: 'test-name-2', price: 3.95 },
  ],
  basket: { '001': 2 },
  onRemove: jest.fn(),
}

describe('Basket', () => {
  it('matches snapshot', () => {
    const instance = <Basket {...basketProps} />
    expect(renderer.create(instance).toJSON()).toMatchSnapshot()
  })

  it('calls onRemove with product id when clicking remove', () => {
    const wrapper = mount(<Basket {...basketProps} />)
    wrapper
      .find('button')
      .first()
      .simulate('click')

    expect(basketProps.onRemove).toHaveBeenCalled()
  })
})
