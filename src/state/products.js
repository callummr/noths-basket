const SET_PRODUCTS = 'noths/products/SET_PRODUCTS'

export const setProducts = newProducts => ({
  type: SET_PRODUCTS,
  payload: newProducts,
})

const initialState = [
  {
    id: '001',
    name: 'Travel Card Holder',
    price: 9.25,
  },
  {
    id: '002',
    name: 'Personalised Cufflinks',
    imageUrl: '/img/002.jpg',
    price: 45.0,
  },
  {
    id: '003',
    name: 'Kids T-shirt',
    imageUrl: '/img/003.jpg',
    price: 19.95,
  },
]

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
