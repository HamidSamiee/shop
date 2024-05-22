'use client'
import useGetUser from '@/hooks/useGetUser'
import Link from 'next/link';
import React from 'react'
import CartItems from './CartItems';
import { ThreeDots } from 'react-loader-spinner';
import CartSummery from './CartSummary';

const CartPage = () => {
  const { data, isLoading } = useGetUser();
  const {user, cart} = data || {};
  console.log( cart)

  if (isLoading) return <ThreeDots wrapperStyle={{display:"flex",justifyContent:"center"}} height='50px' color='blue' />
  
  if (!user || !data) return <div className="container lg:max-w-screen-lg">
    <p className="font-bold text-lg mb-4">برای مشاهده سبد خرید لطفا لاگین کنید</p>
    <Link  href='/auth' className='text-primary-900'>
    رفتن به صفحه لاگین
    </Link>
  </div>
  
  if (!user.cart?.products || user.cart?.products.length === 0) return <div className="container lg:max-w-screen-lg">
    <p className="font-bold text-lg mb-4">سبد خرید شما خالیه !</p>
    <Link  href='/products' className='text-primary-900'>
    رفتن به صفحه محصولات
    </Link>
  </div>
  return (
   <div className="container lg:max-w-screen-lg">
      
      <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-3">
                {
                  cart.productDetail.map((p) => <CartItems key={p._id} product={p}/>)
                } 
              </div>
              <div className="md:col-span-1 ">
                <CartSummery  payDetail={cart.payDetail} />
              </div>
      </div>
        
  </div>
  )
}

export default CartPage