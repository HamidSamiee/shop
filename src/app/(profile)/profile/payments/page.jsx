'use client'
import useGetPayments from '@/hooks/useGetPayments'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import PaymentTable from './PaymentTable'

const Payments = () => {

    const {isLoading, data} = useGetPayments();
    const {payments} = data || {};
    // console.log(payments)
    if (isLoading) return <div className="flex justify-center">
        <ThreeDots color='blue' />
    </div>
  return (
    <div>
          <h1 className="font-bold text-secondary-500 mb-10 text-center">سفارشات شما</h1>
          <PaymentTable payments={payments} />
    </div>
  )
}

export default Payments