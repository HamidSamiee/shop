'use client'
import { useGetUsers } from '@/hooks/useGetUser'
import React from 'react'
import UsersTable from './UsersTable';
import { ThreeDots } from 'react-loader-spinner';

const UsersPage = () => {

    const {isLoading,data}=useGetUsers();
    const { users } = data || {};
    // console.log(users)

  return (
    <div>
          <h1 className="mb-6 font-bold text-secondary-600">لیست کاربران</h1>
          {
              isLoading
                  ?
                  <ThreeDots height='8px' color='blue' />
                  :
                  <UsersTable users={users} />
          }
          
    </div>
  )
}

export default UsersPage