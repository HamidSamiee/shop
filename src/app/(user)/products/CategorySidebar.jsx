
import React, { Suspense } from 'react'
import ProductsFilter from './ProductsFilter'
import ProductsSort from './ProductsSort'

const CategorySidebar = ({categories}) => {
  return (
    <div className='grid text-sm grid-cols-3 sm:grid-cols-5 sm:text-base w-full px-4 mb-5  border-b border-primary-500 pb-1 md:border-none md:text-lg md:bg-white md:flex  md:flex-col md:items-start md:justify-start   md:space-y-10 '>
      <Suspense>
        <ProductsFilter categories={categories} />
        <ProductsSort />
      </Suspense>
    </div>
  )
}

export default CategorySidebar