'use client'
import { useGetCategory } from '@/hooks/useCategories';
import toLocalDate from '@/utils/toLocalDate';
import { useParams } from 'next/navigation';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

const categoriesListsTheads = [
   
    {
        id: 2,
        label: " عنوان"
  },
  {
        id: 3,
        label: "عنوان انگلیسی"
  },
    {
        id: 4,
        label: "نوع"
    },
    {
        id: 5,
        label: "توضیحات"
    },
    {
        id: 6,
        label: "تاریخ ایجاد"
    }
]

const CategoryDetail = () => {

  const { id } = useParams();
  const {isLoading, data } = useGetCategory(id);
  const { category } = data || {};


  return (
     <div className="overflow-auto shadow-xl rounded-lg mt-5">
              <table className="">
                        <thead>
                            <tr>
                                {
                                       categoriesListsTheads.map(h => {
                                            return <th className='whitespace-nowrap table__th text-center' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                              {isLoading ? <span className="h-screen flex items-center justify-center">
                                            <ThreeDots height='30px' color='blue' />
                                          </span> 
                                        : 
                                              
                                              <tr className=''>
                                                          <td className="table__td truncate">{category.title}</td>
                                                          <td className="table__td ">{category.englishTitle}</td>
                                                          <td className="table__td whitespace-nowrap"><span className='badge badge--secondary'>{category.type }</span></td>
                                                          <td className="table__td">{category.description }</td>
                                                          <td className="table__td2 text-left">{toLocalDate(category.createdAt) }</td>
                                              </tr>            
                                             
                              }  
                        </tbody>
                </table>
          </div>
  )
}

export default CategoryDetail