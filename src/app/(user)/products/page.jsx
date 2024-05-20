
import { getAllCategories } from '@/services/categoriesServices'
import { getAllProducts } from '@/services/productsServices';
import React from 'react'
import CategorySidebar from './CategorySidebar';
import queryString from 'query-string';

export const dynamic = "force-dynamic"; //dynamic rendering ssr

async function Products({ searchParams }){

  // console.log(searchParams)

  const {categories} =await getAllCategories();
  const {products} =await getAllProducts(queryString.stringify(searchParams));


  return (
    <div className='grid grid-cols-4 '>

        <CategorySidebar categories={categories} />
        
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {
            products.map(product => {
              return <div key={product._id} className="p-4 shadow-md border rounded-md">
                {
                  product.title
                    }
              </div>
            })
            }
        </div>
      
    </div>
  )
}

export default Products