import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.aside`
  order: -1;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    order: 1;
    width: 250px;
  }
  background-color: #fff;
  padding: 15px;
`

const Title = styled.h1`
  color: #333333;
  font-size: 30px;
  margin-bottom: 20px;
`

const ProductTable = styled.table`
  margin-bottom: 20px;
  width: 100%;

  th {
    font-weight: 600;
    text-align: left;
    padding-bottom: 10px;
  }
`

const RemoveButton = styled.button`
  color: red;
  cursor: pointer;
  font-weight: bold;
  border: none;
  font-size: 1.2em;
`

const getTotalPrice = (basket, products) =>
  Object.entries(basket)
    .map(([id, count]) => products.find(p => p.id === id).price * count)
    .reduce((prev, next) => prev + next, 0)
    .toFixed(2)

const BasketItems = ({ products, basket, onRemove }) => {
  const items = Object.entries(basket).map(([id, count]) => ({
    id,
    count,
    name: products.find(p => p.id === id).name,
  }))

  return items.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <RemoveButton onClick={() => onRemove(item.id)}>X</RemoveButton>
      </td>
    </tr>
  ))
}

const Basket = props => (
  <Container>
    <Title>Basket</Title>

    <ProductTable>
      <thead>
        <tr>
          <th>Product name</th>
          <th>qty</th>
          <th />
        </tr>
      </thead>

      <tbody>
        <BasketItems
          products={props.products}
          basket={props.basket}
          onRemove={props.onRemove}
        />
      </tbody>
    </ProductTable>

    <div>
      <span>Total: </span>
      <span>£{getTotalPrice(props.basket, props.products)}</span>
    </div>
  </Container>
)

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  basket: PropTypes.objectOf(PropTypes.number).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Basket
