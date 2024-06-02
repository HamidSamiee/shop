'use client'
import { categorysListsTheads } from '@/constants/tableHeads'
import { useDeleteCategory, useGetCategories } from '@/hooks/useCategories'
import { toPersianDigits } from '@/utils/toPersianDigits'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'

const CategoriesTable = ({ categories }) => {
    
    
    const {refetch} = useGetCategories();
    const {mutateAsync} = useDeleteCategory();

    const removeProductHandler = async(id) => {
    try {
       const { message } = await mutateAsync(id);
       refetch();
       toast.success(message);
     } catch (error) {
      toast.error(error?.response?.data?.message)
     }
}

  return (
    <div className="overflow-auto shadow-xl rounded-lg mt-5 p-3 pb-10">
              <table className="">
                        <thead>
                            <tr>
                                {
                                        categorysListsTheads.map(h => {
                                            return <th className='whitespace-nowrap table__th text-center' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                                { categories &&
                                    categories.map((category,index) =>{
                                    return <tr key={category._id} className=''>
                                                <td className="table__td">{toPersianDigits(index+1)}</td>
                                                <td className="table__td truncate">{category.title}</td>
                                                <td className="table__td">{category.englishTitle}</td>
                                                <td className="table__td "><span className='badge badge--secondary'>{category.type}</span></td>
                                                <td className="table__td text-center whitespace-nowrap">{category.description}</td>
                                                <td className="table__td whitespace-nowrap  flex items-center justify-between gap-x-2">
                                                    <button >
                                                        <Link href={`/admin/categories/${category._id}`} >
                                                            <FaEye className='text-primary-900 w-6 h-6' />
                                                        </Link>   
                                                    </button>
                                                    <button onClick={()=>removeProductHandler(category._id)}>
                                                            <FaTrashAlt className='text-rose-600 w-6 h-6' />
                                                    </button>
                                                    <button >
                                                        <Link href={`/admin/categories/edit/${category._id}`} > 
                                                             <FaEdit className='text-secondary-600 w-6 h-6' />  
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                    })
                                }  
                        </tbody>
                </table>
          </div>
  )
}

export default CategoriesTable