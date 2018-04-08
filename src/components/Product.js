import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProductCard = styled.article`
  @media (min-width: 415px) {
    width: 45%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  position: relative;
  padding-bottom: 70px;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

const Title = styled.h1`
  color: #333333;
  font-size: 19px;
  margin-bottom: 15px;
  line-height: 1.2;
`

const Price = styled.span`
  color: green;
`

const Button = styled.button`
  position: absolute;
  height: 40px;
  background-color: #0a89af;
  bottom: 15px;
  left: 15px;
  right: 15px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  width: calc(100% - 30px);
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`

const Product = props => (
  <ProductCard>
    <Image
      src={props.imageUrl || 'http://via.placeholder.com/150x150'}
      alt={props.name}
    />
    <Title>{props.name}</Title>
    <Price>£{props.price.toFixed(2)}</Price>
    <Button onClick={() => props.onAddToBasket(props.id)}>Add to Basket</Button>
  </ProductCard>
)

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  onAddToBasket: PropTypes.func.isRequired,
}

export default Product
