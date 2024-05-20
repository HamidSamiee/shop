
import React from 'react'
import ProductsFilter from './productsFilter'
import ProductsSort from './ProductsSort'

const CategorySidebar = ({categories}) => {
  return (
    <div className='space-y-10'>
      <ProductsFilter categories={categories} />
      <ProductsSort />
    </div>
  )
}

export default CategorySidebar