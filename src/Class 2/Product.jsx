import React from 'react'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'

const Product = ({detail}) => {
    console.log(detail.price)
  return (
    <div>
      <h1>Product Detail</h1>
      <ProductName name={detail.name}/>
      <ProductPrice price={detail.price}/>
      <hr />
    </div>
  )
}

export default Product
