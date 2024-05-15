'use client'
import useGetUser from '@/hooks/useGetUser'
import toLocalDate from '@/utils/toLocalDate';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

const ProfilePanel = () => {

  const {data,isLoading } = useGetUser();
  const { user } = data || {};

  if (isLoading) return <ThreeDots  width='30px' color='blue' wrapperStyle={{display:"flex",justifyContent:'center'}}/>
  return (
    <div>
      <h1 className="">
          {user.name} خوش آمدی ❤️!
      </h1>
      <span className="">تاریخ عضویت : </span>
      <span className="">{toLocalDate(user.createdAt)}</span>
    </div>
  )
}

export default ProfilePanel