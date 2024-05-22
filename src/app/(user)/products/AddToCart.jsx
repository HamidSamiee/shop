'use client'
import { useAddToCart } from '@/hooks/useAddToCart'
import useGetUser from '@/hooks/useGetUser'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { Circles } from 'react-loader-spinner'

const AddToCart = ({ product }) => {

    const queryClient = useQueryClient();
    const router = useRouter();
    const { error, isLoading, mutateAsync } = useAddToCart();

    const { data:dataUser} = useGetUser();
    const { user} = dataUser || {};
    // console.log(user)

    const cartHandler =async () => {
        
        if (!user) {
            toast.error('لطفاابتدا لاگین کنید')
            router.push('/auth');
            return
        }
        try {
            const { message } = await mutateAsync(product._id);
            toast.success(message);
            queryClient.invalidateQueries(['get-user'])
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const isCardIn = (user, product) => {
        if (!user) {
            return false
        }
        return user.cart?.products.some(p=>p.productId===product._id)
    }
  return (
          <div className="">
          {isCardIn(user,product) ? (
              <button className='btn btn--info'>
                    <Link href='/cart' className='' >ادامه سفارش</Link>
              </button>
          ):
              isLoading ? (
                <Circles  height='50px' color='blue' />
                 ) :(
                <button onClick={cartHandler} className='btn btn--primary shadow-lg'>
                  اضافه کردن به سبد خرید
                </button>)
              }
          </div>
  )
}

export default AddToCart