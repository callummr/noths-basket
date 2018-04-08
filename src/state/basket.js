import removeKeyFromObject from '../util/removeKeyFromObject'

const INCREMENT_ITEM = 'noths/basket/INCREMENT_ITEM'
const DECREMENT_ITEM = 'noths/basket/DECREMENT_ITEM'
const DELETE_ITEM = 'noths/basket/DELETE_ITEM'
const SET_ITEM_COUNT = 'noths/basket/SET_ITEM_COUNT'

export const incrementItem = id => ({
  type: INCREMENT_ITEM,
  payload: id,
})
export const decrementItem = id => ({
  type: DECREMENT_ITEM,
  payload: id,
})
export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
})
export const setItemCount = (id, count) => ({
  type: SET_ITEM_COUNT,
  payload: { id, count },
})

export default (state = {}, action = {}) => {
  switch (action.type) {
    case INCREMENT_ITEM: {
      const id = action.payload
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      }
    }

    case DECREMENT_ITEM: {
      const id = action.payload
      if (state[id] && state[id] > 1)
        return {
          ...state,
          [id]: state[id] - 1,
        }
      // dropping to 0, we need to actually remove the item
      return removeKeyFromObject(state, id)
    }

    case DELETE_ITEM:
      return removeKeyFromObject(state, action.payload)

    case SET_ITEM_COUNT: {
      const { id, count } = action.payload
      return {
        ...state,
        [id]: count,
      }
    }

    default:
      return state
  }
}
