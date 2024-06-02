'use client'
import { useGetProduct } from '@/hooks/useProducts';
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import { useParams } from 'next/navigation'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

const productsListsTheads = [
   
    {
        id: 2,
        label: " عنوان"
  },
  {
        id: 3,
        label: "توضیحات"
  },
    {
        id: 4,
        label: "اسلاگ"
    },
    {
        id: 5,
        label: "دسته بندی"
    },
    {
        id: 6,
        label: "قیمت"
    },
    {
        id: 7,
        label: "تخفیف"
    },
    {
        id: 8,
        label: "قیمت با تخفیف "
    },
    {
        id: 9,
        label: "موجودی"
  },
  {
        id: 10,
        label: "لینک عکس محصول"
  },
  {
        id: 11,
        label: "تگ ها"
    },
]

const DetailProduct = () => {

  const { id } = useParams();
  const {isLoading ,data } = useGetProduct(id);
  const { product } = data || {};
  
  // console.log(product)
  
  return (
    
              <table className="overflow-auto shadow-xl rounded-lg mt-5 p-3">
                        <thead>
                            <tr>
                                {
                                        productsListsTheads.map(h => {
                                            return <th className='whitespace-nowrap table__th' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                              {isLoading ? <tr className="h-screen flex items-center justify-center">
                                            <ThreeDots  height='30px' color='blue' />
                                          </tr> 
                                        : 
                                              
                                              <tr className=''>
                                                          <td className="table__td truncate">{product.title}</td>
                                                          <td className="table__td min-w-[300px] ">{product.description}</td>
                                                          <td className="table__td whitespace-nowrap">{product.slug }</td>
                                                          <td className="table__td">{product.category.title }</td>
                                                          <td className="table__td2 text-center">{toPersianDigitsWithComma(product.price) }</td>
                                                          <td className="table__td whitespace-nowrap text-center">{toPersianDigits(product.discount) }</td>
                                                          <td className="table__td text-center">{toPersianDigitsWithComma(product.offPrice)}</td>
                                                          <td className="table__td text-center">{toPersianDigits(product.countInStock)}</td>
                                                          <td className="table__td">{product.imageLink }</td>
                                                          <td className="table__td flex flex-col justify-center items-center gap-y-2 whitespace-normal">{product.tags.map((tag,i) => <span key={i} className='badge badge--secondary'>{tag}</span>)}</td>
                                              </tr>
                                             
                              }  
                        </tbody>
                </table>
        
  )
}

export default DetailProduct