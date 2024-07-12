
import { getAllCategories } from '@/services/categoriesServices'
import { getAllProducts } from '@/services/productsServices';
import React from 'react'
import CategorySidebar from './CategorySidebar';
import queryString from 'query-string';
import Link from 'next/link';
import AddToCart from './AddToCart';
import ProductLike from './ProductLike';
import { cookies } from 'next/headers';
import { toStringCookeis } from '@/utils/toStringCookeis';
import Image from 'next/image';
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import { FaStar } from 'react-icons/fa';
import BreadCrumbs from '@/components/BreadCrumbs';



export const dynamic = "force-dynamic"; //dynamic rendering ssr

async function Products({ searchParams }){

  // console.log(searchParams)
  // console.log(cookies().getAll())
  const cookieStore = cookies();
  const strCookies = toStringCookeis(cookieStore);
console.log(queryString.stringify(searchParams))
  const { categories } = await getAllCategories();
  const {products} =await getAllProducts(queryString.stringify(searchParams),strCookies);


  return (
    <div className="space-y-14 ">
      <div className='flex flex-col gap-y-5'>
            <BreadCrumbs searchParams={searchParams} />
            <div className='grid grid-cols-1 md:grid-cols-7 '>
                <CategorySidebar categories={categories} />
                <div className='md:col-span-6'>
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:mr-6 gap-6">
                        {
                          products.map(product => {
                            return <div key={product._id} className='p-4 w-full mx-1 shadow-md border rounded-md flex flex-col items-center justify-between'>
                                      <Link href={`/products/${product.slug}`}  className="w-full h-3/4  flex items-start md:items-center justify-between ">
                                            <div className="w-1/2 flex flex-col gap-2">
                                                  <h2 className='font-bold text-base whitespace-nowrap'>{product.title}</h2>
                                                    <div className="mb-3">
                                                      <span className="text-sm text-ellipsis line-clamp-2">{product.description}</span>    
                                                    </div>
                                                    
                                            </div>
                                            <div className=' w-1/2 '>
                                                  <Image  
                                                      src={product?.imageLink}
                                                      alt={product?.englishTitle}
                                                      blurDataURL={product?.imageLink}
                                                      placeholder='blur'
                                                      width={150}
                                                      height={90}
                                                      sizes='(max-width:640px) 100vw,(max-width:768px) 80vw,(max-width:1024px) 60vw,50vw'
                                                      loading='lazy'
                                                      className="w-full h-full top-0 left-0 rounded-2xl object-cover"
                                                  />
                                            </div>
                                      </Link>
                                      <div className="flex flex-col w-full">
                                            <div className="flex w-full items-center justify-between mb-2">
                                                        <ProductLike product={product} />
                                                        <div className="">
                                                              {toPersianDigitsWithComma(product.price)}  تومان
                                                        </div>
                                                        <div className="flex items-center justify-end gap-x-1 ml-5">
                                                            <FaStar className='w-4 h-4  fill-yellow-400 '/>
                                                            <span className="text-sm">{toPersianDigits(product.rating)}</span>
                                                        </div>
                                            </div>
                                            <AddToCart product={product} />
                                            
                                      </div>
                                  </div>
                            
                          })
                          }
                    </div>
                </div>
            </div>

            
      </div>
    </div>
    
  )
}

export default Products