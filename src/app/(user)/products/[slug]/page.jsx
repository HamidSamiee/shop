import { getAllProducts, getProductBySlug } from '@/services/productsServices'
import  { toPersianDigits,toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import React from 'react'
import AddToCart from '../AddToCart';
import Image from 'next/image';

export const dynamic = "force-static";

export const dynamicParams = false;



const Product =async ({ params }) => {
    
    const { slug } = params;
    
    const { product } =await getProductBySlug(slug);
    console.log(product)
  

  return (
    <div className='flex flex-col gap-y-4'>
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-4">
                    <h2 className="font-extrabold text-3xl">{product.title}</h2>
                    <p className="font-semibold ">{product.description}</p>
                    <div className="">
                      <p className=''>  قیمت :  <span className={`${product.discount ? 'line-through' : 'font-bold'}`}>{toPersianDigitsWithComma(product.price)}</span></p>
                      {
                          !!product.discount && <div className="flex items-center gap-x-4">
                              <p className="">قیمت با تخفیف : <span className="">{toPersianDigitsWithComma(product.offPrice)}</span></p>
                              <p className='badge--error px-[4px] py-[0.5px] rounded-xl'> <span className='text-white font-bold'>{toPersianDigits(product.discount)} ٪</span></p>
                            </div>
                      }
                      
                    </div>
            </div>
            <div className="w-1/2">
                 <Image  
                        src={product?.imageLink}
                        alt={product?.englishTitle}
                        layout='responsive'
                        objectFit='cover'
                        blurDataURL={product?.imageLink}
                        placeholder='blur'
                        width={150}
                        height={90}
                        sizes='(max-width:640px) 100vw,(max-width:768px) 80vw,(max-width:1024px) 60vw,50vw'
                        loading='lazy'
                        className="w-full h-full top-0 left-0 rounded-2xl"
                  />
            </div>
          </div>
          <AddToCart product={product} />
    </div>
  )
}

export default Product


export async function generateStaticParams() {
  const {products} = await getAllProducts()
 
  return products?.map((product) => ({
    slug: product.slug,
  }))
}