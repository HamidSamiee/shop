import { productsListsTheads } from '@/constants/tableHeads'
import { useRemoveProduct } from '@/hooks/useProducts'
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'


const ProductsTable = ({ products }) => {
    
    const { mutateAsync} = useRemoveProduct();
    const router = useRouter();

    const removeProductHandler = async(id) => {
        try {
       const { message } = await mutateAsync(id);
       router.refresh();
       toast.success(message);
     } catch (error) {
      toast.error(error?.response?.data?.message)
     }
    }

  return (
     <div className="overflow-auto shadow-xl rounded-lg mt-5">
              <table className="">
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
                                { products &&
                                    products.map((product,index) =>{
                                    return <tr key={product._id} className=''>
                                                <td className="table__td">{toPersianDigits(index+1)}</td>
                                                <td className="table__td truncate">{product.title}</td>
                                                <td className="table__td">{product.category.title }</td>
                                                <td className="table__td text-center">{toPersianDigitsWithComma(product.price) }</td>
                                                <td className="table__td whitespace-nowrap text-center">{toPersianDigits(product.discount) }</td>
                                                <td className="table__td text-center">{toPersianDigitsWithComma(product.offPrice)}</td>
                                                <td className="table__td text-center">{toPersianDigits(product.countInStock)}</td>
                                                <td className="table__td  whitespace-nowrap flex items-center justify-between gap-x-2">
                                                    <button >
                                                        <Link href={`/admin/products/${product._id}`} >
                                                            <FaEye className='text-primary-900 w-6 h-6' />
                                                        </Link>   
                                                    </button>
                                                    <button onClick={()=>removeProductHandler(product._id)}>
                                                            <FaTrashAlt className='text-rose-600 w-6 h-6' />
                                                    </button>
                                                    <button >
                                                        <Link href={`/admin/products/edit/${product._id}`} > 
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

export default ProductsTable