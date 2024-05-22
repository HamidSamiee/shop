'use client'
import useGetUser from '@/hooks/useGetUser'
import toLocalDate from '@/utils/toLocalDate';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import PaymentTable from './payments/PaymentTable';
import Link from 'next/link';

const ProfilePanel = () => {

  const {data,isLoading } = useGetUser();
  const { user ,payments} = data || {};

  if (isLoading) return <ThreeDots  width='30px' color='blue' wrapperStyle={{display:"flex",justifyContent:'center'}}/>
  return (
    <div>
      <h1 className="">
          {user?.name} خوش آمدی ❤️!
      </h1>
      <span className="">تاریخ عضویت : </span>
      <span className="">{toLocalDate(user?.createdAt)}</span>
      <div className="border border-gray-400 rounded-xl  mt-5">
            <div className="flex items-center justify-between p-6 mb-5">
            <h2 className="">آخرین سفارشات</h2>
            <Link href='/profile/payments' className='text-primary-900'>
              مشاهده تمامی سفارشات
            </Link>
          </div>
          <PaymentTable
            payments={
              payments
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0,3)
            }
          />
      </div>
    </div>
  )
}

export default ProfilePanel