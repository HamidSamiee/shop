'use client'
import { likeProduct } from '@/services/productsServices';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { AiOutlineLike,AiFillLike } from "react-icons/ai";

const ProductLike = ({ product }) => {
    // console.log(product)
    const router = useRouter();
    const pathName = usePathname();
    // const searchParams = useSearchParams();

    const likeHandler = async () => {
        
        try {
            const { message } = await likeProduct(product._id);
            toast.success(message);
            router.refresh(pathName)
            // router.push(pathName +'?'+searchParams.toString())
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

  return (
    <div className='mr-5'>
        <button onClick={likeHandler}>
              {
                  product.isLiked ?
                  <AiFillLike className='w-6 h-6 fill-primary-900 ' />
                      :
                  <AiOutlineLike className='w-6 h-6 stroke-secondary-900' />
            }
        </button>
    </div>
  )
}

export default ProductLike