
import { getAllCategories } from '@/services/categoriesServices'
import { getAllProducts } from '@/services/productsServices';
import React from 'react'
import CategorySidebar from './CategorySidebar';
import queryString from 'query-string';
import toLocalDate from '@/utils/toLocalDate';
import Link from 'next/link';
import AddToCart from './AddToCart';

export const dynamic = "force-dynamic"; //dynamic rendering ssr

async function Products({ searchParams }){

  // console.log(searchParams)

  const {categories} =await getAllCategories();
  const {products} =await getAllProducts(queryString.stringify(searchParams));


  return (
    <div className='grid grid-cols-4 '>

        <CategorySidebar categories={categories} />
        <div className='col-span-3'>
            <div className=" grid grid-cols-3 gap-6">
                {
                  products.map(product => {
                    return <div key={product._id} className="p-4 shadow-md border rounded-md flex flex-col gap-4">

                      <h2 className='font-bold text-xl'>{product.title}</h2>
                      <div className="mb-3">
                        <span className="">تاریخ ساختن :</span>
                        <span className="">{toLocalDate(product.createdAt)}</span>
                      </div>
                      <Link
                        href={`/products/${product.slug}`}
                        className='text-primary-900 font-bold'
                      >
                        مشاهده محصول
                      </Link>
                      <AddToCart product={product} />
                    </div>
                  })
                  }
            </div>
        </div>
        
      
    </div>
  )
}

export default Products