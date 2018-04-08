import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import ProductList from './ProductList'
import Product from './Product'

const productListProps = {
  products: [
    { id: '001', name: 'test-name', price: 1.5, iamgeUrl: 'http://test.image' },
    { id: '002', name: 'test-name-2', price: 3.95 },
  ],
  onAddToBasket: jest.fn(),
}

describe('ProductList', () => {
  beforeEach(() => {
    productListProps.onAddToBasket.mockClear()
  })

  it('matches snapshot', () => {
    const instance = renderer.create(<ProductList {...productListProps} />)
    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('renders as many Products as provided', () => {
    const wrapper = mount(<ProductList {...productListProps} />)
    expect(wrapper.find(Product).length).toBe(productListProps.products.length)
  })

  it('passes onAddToBasket down to Products', () => {
    const wrapper = mount(<ProductList {...productListProps} />)
    const aProduct = wrapper.find(Product).first()
    expect(aProduct.props()).toHaveProperty('onAddToBasket')
    aProduct.props().onAddToBasket()
    expect(productListProps.onAddToBasket).toHaveBeenCalled()
  })
})
