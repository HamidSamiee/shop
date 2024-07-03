'use client'

import { useGetCoupons } from '@/hooks/useCoupon'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoAddCircle } from 'react-icons/io5';
import CouponsTable from './CouponsTable';

const CouponsPage = () => {

  const router = useRouter();
  const { data } = useGetCoupons();
  const {coupons} = data || {};
//  console.log(coupons)
 
  return (
    <div className='w-full flex flex-col gap-y-10'>
      <div className="flex w-full justify-between items-center">
        <h1 className='font-bold text-secondary-600'>کدهای تخفیف </h1>
        <button onClick={()=>router.push('/admin/coupons/add')} className=" flex gap-x-1 items-center text-primary-900 font-bold">
          <IoAddCircle className='text-primary-900 w-6 h-6'/>افزودن کد تخفیف
        </button>
      </div>
      <CouponsTable coupons={coupons} />
    </div>
  )
}

export default CouponsPage