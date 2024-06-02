'use client'

import { useGetPayments } from '@/hooks/usePayments';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import PaymentsTable from './PaymentsTable';

const Payments = () => {

  const {data , isLoading} = useGetPayments();
  const {payments} = data ||{};
  // console.log(payments)

  
  return (
    <div className='relative h-full w-full'>
      <div className="flex items-center justify-between">
          <h1 className="font-bold text-secondary-500 mb-6">سفارشات</h1>
      </div>
      {
       isLoading ? <div className="h-screen flex items-center justify-center">
                        <ThreeDots  height='30px' color='blue' />
                   </div>
                 :
                   <PaymentsTable payments={payments} />
      }
      
    </div>
  )
}

export default Payments