'use client'
import useGetUser from '@/hooks/useGetUser';
import React from 'react'

const AdminPanel = () => {
  const { data:dataUser } = useGetUser();
  const {user}=dataUser || {};

  console.log(user)
  return (
    <div>
      {
        user &&
        <div className='flex items-center gap-x-5'>
            
            <h3 className='font-bold flex items-center gap-x-2'>
              {user?.name}   
            </h3>
            <p className="">
              عزیز خوش آمدی 
            </p>        
        </div>
      }

    </div>
  )
}

export default AdminPanel