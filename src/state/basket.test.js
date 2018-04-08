import reducer, {
  incrementItem,
  decrementItem,
  deleteItem,
  setItemCount,
} from './basket'

describe('basket reducer', () => {
  it('should match default snapshot', () => {
    expect(reducer()).toMatchSnapshot()
  })

  it('should match incrementItem snapshot', () => {
    const incrementItemAction = incrementItem('004')

    expect(reducer({}, incrementItemAction)).toMatchSnapshot()
    expect(
      reducer({ '004': 3, '005': 1 }, incrementItemAction)
    ).toMatchSnapshot()
  })

  it('should match decrementItem snapshot', () => {
    const decrementItemAction = decrementItem('004')

    expect(reducer({}, decrementItemAction)).toMatchSnapshot()
    expect(
      reducer({ '004': 3, '005': 1 }, decrementItemAction)
    ).toMatchSnapshot()
  })

  it('should match deleteItem snapshot', () => {
    const deleteItemAction = deleteItem('004')

    expect(reducer({}, deleteItemAction)).toMatchSnapshot()
    expect(reducer({ '004': 3, '005': 1 }, deleteItemAction)).toMatchSnapshot()
  })

  it('should match setItemCount snapshot', () => {
    const setItemCountAction = setItemCount('004', 2)

    expect(reducer({}, setItemCountAction)).toMatchSnapshot()
    expect(
      reducer({ '004': 3, '005': 1 }, setItemCountAction)
    ).toMatchSnapshot()
  })
})

describe('products actions', () => {
  describe('incrementItem', () => {
    it('should match snapshot', () => {
      expect(incrementItem('004')).toMatchSnapshot()
    })
  })

  describe('decrementItem', () => {
    it('should match snapshot', () => {
      expect(decrementItem('004')).toMatchSnapshot()
    })
  })

  describe('deleteItem', () => {
    it('should match snapshot', () => {
      expect(deleteItem('004')).toMatchSnapshot()
    })
  })

  describe('setItemCount', () => {
    it('should match snapshot', () => {
      expect(setItemCount('004')).toMatchSnapshot()
    })
  })
})
