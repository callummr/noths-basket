import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Product from './Product'

const productProps = {
  id: '001',
  name: 'test-name',
  imageUrl: 'http://test.image',
  price: 1.5,
  onAddToBasket: jest.fn(),
}

describe('Product', () => {
  beforeEach(() => {
    productProps.onAddToBasket.mockClear()
  })

  it('matches snapshot', () => {
    const instance = <Product {...productProps} />
    expect(renderer.create(instance).toJSON()).toMatchSnapshot()
  })

  it('renders image if URL given', () => {
    const wrapper = mount(<Product {...productProps} />)
    expect(wrapper.find('img').prop('src')).toBe(productProps.imageUrl)
  })

  it('renders a placeholder if no imageURL given', () => {
    const wrapper = mount(
      <Product {...{ ...productProps, imageUrl: undefined }} />
    )
    expect(
      wrapper
        .find('img')
        .prop('src')
        .includes('placeholder')
    ).toBe(true)
  })

  it('calls onAddToBasket when button clicked', () => {
    const wrapper = mount(<Product {...productProps} />)
    wrapper.find('button').simulate('click')
    expect(productProps.onAddToBasket).toHaveBeenCalled()
  })
})
