
import React from 'react'
import ProductsFilter from './productsFilter'
import ProductsSort from './ProductsSort'

const CategorySidebar = ({categories}) => {
  return (
    <div className='w-full px-4 mb-5 flex items-center space-x-3 border-b border-primary-500 pb-1 md:border-none justify-start md:bg-white  md:flex-col md:items-start md:justify-start   md:space-y-10 '>
      <ProductsFilter categories={categories} />
      <ProductsSort />
    </div>
  )
}

export default CategorySidebar