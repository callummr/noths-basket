import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import reducers from '../state'
import App from './App'
import ProductList from '../components/ProductList'
import Basket from '../components/Basket'

describe('App container', () => {
  it('passes data from the store to components', () => {
    const wrapper = mount(
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    )

    const listProducts = wrapper.find(ProductList).prop('products')
    expect(listProducts).toBeInstanceOf(Array)

    const onAddToBasket = wrapper.find(ProductList).prop('onAddToBasket')
    expect(typeof onAddToBasket).toBe('function')

    const basketProducts = wrapper.find(Basket).prop('products')
    expect(basketProducts).toBeInstanceOf(Array)

    const onRemove = wrapper.find(Basket).prop('onRemove')
    expect(typeof onRemove).toBe('function')
  })
})
