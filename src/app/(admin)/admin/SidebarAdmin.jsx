'use client'
import { logoutProfile } from '@/services/authServices'
import Link from 'next/link'
import React from 'react'

const SidebarAdmin = () => {


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
                  <Link href="/admin"> داشبورد</Link>  
            </li>
            <li className="">
                  <Link href="/admin/users"> کاربران </Link>
            </li>
             <li className="">
                  <Link href="/admin/categories"> دسته بندی ها </Link>
            </li>
             <li className="">
                  <Link href="/admin/products"> محصولات </Link>
            </li>
             <li className="">
                  <Link href="/admin/payments"> سفارشات </Link>
            </li>
            <li className="">
                  <Link href="/admin/coupons"> کد تخفیف </Link>
            </li>
            
            <li className="">
                  <button onClick={logoutHandler}> خروج از حساب کاربری </button>
            </li>
        </ul>
    </div>
  )
}

export default SidebarAdmin