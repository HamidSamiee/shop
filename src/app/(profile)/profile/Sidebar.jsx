'use client'
import { logoutProfile } from '@/services/authServices'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {


  const logoutHandler =async () => {
    
    await logoutProfile();  

    document.location.href = '/';
  }

  return (
    <div>
        <ul className="flex flex-col space-y-8">
            <li className="">
                  <Link href="/">صفحه اصلی</Link>  
            </li>
            <li className="">
                  <Link href="/profile"> داشبورد</Link>  
            </li>
            <li className="">
                  <Link href="/profile/me"> اطلاعات کاربری</Link>
            </li>
            <li className="">
                  <Link href="/profile/payments"> سفارشات شما</Link>
            </li>
            <li className="">
                  <button onClick={logoutHandler}> خروج از حساب کاربری </button>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar