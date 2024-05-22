import { getAllProducts, getProductBySlug } from '@/services/productsServices'
import toPersianDigits from '@/utils/toPersianDigits';
import React from 'react'
import AddToCart from '../AddToCart';

export const dynamicParams = false;
export const dynamic = 'force-static';

const Product =async ({ params }) => {
    
    const { slug } = params;
    
    const { product } =await getProductBySlug(slug);
    // console.log(product)
  

  return (
    <div className='flex flex-col gap-y-4'>
          <h2 className="font-extrabold text-3xl">{product.title}</h2>
          <p className="font-semibold ">{product.description}</p>
          <div className="">
              <p className=''>  قیمت :  <span className={`${product.discount ? 'line-through' : 'font-bold'}`}>{toPersianDigits(product.price)}</span></p>
              {
                  !!product.discount && <div className="flex items-center gap-x-4">
                      <p className="">قیمت با تخفیف : <span className="">{toPersianDigits(product.offPrice)}</span></p>
                      <p className='badge--error px-[4px] py-[0.5px] rounded-xl'> <span className='text-white font-bold'>{toPersianDigits(product.discount)} ٪</span></p>
                    </div>
              }
              
          </div>
          <AddToCart product={product} />
    </div>
  )
}

export default Product


export async function generateStaticParams() {
  const {products} = await getAllProducts()
 
  return products.map((product) => ({
    slug: product.slug,
  }))
}