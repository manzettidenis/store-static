import React from 'react'
import Product from '../components/ProductPage/Product'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
const ProductIndex = () => {
  return (
    <>
      <Product/>
      <ProductDescription/>
      <RelatedProducts/>
    </>
  )
}
export default ProductIndex
