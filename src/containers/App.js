import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ProductList from '../components/ProductList'
import Basket from '../components/Basket'
import { incrementItem, deleteItem } from '../state/basket'

const Container = styled.section`
  padding: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const App = props => (
  <Container>
    <ProductList
      products={props.products}
      onAddToBasket={props.incrementItem}
    />
    <Basket
      products={props.products}
      basket={props.basket}
      onRemove={props.deleteItem}
    />
  </Container>
)

const mapStateToProps = ({ products, basket }) => ({ products, basket })
const mapDispatchToProps = { incrementItem, deleteItem }
export default connect(mapStateToProps, mapDispatchToProps)(App)
