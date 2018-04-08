import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.section`
  @media (min-width: 768px) {
    width: calc(100% - 300px);
  }
  order: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

const ProductList = props => (
  <Container>
    {props.products.map(p => (
      <Product key={p.id} {...p} onAddToBasket={props.onAddToBasket} />
    ))}
  </Container>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToBasket: PropTypes.func.isRequired,
}

export default ProductList
