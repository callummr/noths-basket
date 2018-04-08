import removeKeyFromObject from './removeKeyFromObject'

describe('removeKeyFromObject', () => {
  it('should remove given key from an object', () => {
    expect(
      removeKeyFromObject({ foo: 'bar', baz: 'qux' }, 'baz')
    ).not.toHaveProperty('baz')
  })
})
