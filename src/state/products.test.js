import reducer, { setProducts } from './products'

describe('products reducer', () => {
  it('should match default snapshot', () => {
    expect(reducer()).toMatchSnapshot()
  })

  it('should match setProducts snapshot', () => {
    const setProductsAction = setProducts([
      { id: '004', name: 'Test product', price: 10.5 },
    ])

    expect(reducer({}, setProductsAction)).toMatchSnapshot()
  })
})

describe('products actions', () => {
  describe('setProducts', () => {
    it('should match snapshot', () => {
      expect(
        setProducts([{ id: '004', name: 'Test product', price: 10.5 }])
      ).toMatchSnapshot()
    })
  })
})
