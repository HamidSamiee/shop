
import React, { Suspense } from 'react'
import ProductsFilter from './ProductsFilter'
import ProductsSort from './ProductsSort'

const CategorySidebar = ({categories}) => {
  return (
    <div className='w-full px-4 mb-5 flex items-center space-x-3 border-b border-primary-500 pb-1 md:border-none justify-start md:bg-white  md:flex-col md:items-start md:justify-start   md:space-y-10 '>
      <Suspense>
        <ProductsFilter categories={categories} />
        <ProductsSort />
      </Suspense>
    </div>
  )
}

export default CategorySidebar