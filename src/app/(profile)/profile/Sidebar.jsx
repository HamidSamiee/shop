'use client'
import { logoutProfile } from '@/services/authServices'
import Link from 'next/link'
import React, { useState } from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BsInfoSquare } from 'react-icons/bs'
import { HiMenuAlt3, HiOutlineHome, HiOutlineLogout } from 'react-icons/hi'
import { Tooltip } from 'react-tooltip'
import { FaRegRectangleList } from 'react-icons/fa6'

const Sidebar = () => {

  const [open, setOpen] = useState(false)

  const logoutHandler =async () => {
    
    await logoutProfile();  

    document.location.href = '/';
  }

  return (
    <div className={`${open ? 'col-span-2 md:col-span-1' : 'col-span-6 sm:col-span-5 md:col-span-3' } text-sm  md:text-base  overflow-hidden`}>
        <ul className={`flex flex-col   p-4 h-screen  space-y-6 ${open ? 'w-16 items-center': 'max-w-fit'}  bg-gray-200`}>
        <li className="">
                  <button onClick={()=>setOpen(!open)} className='p-1 flex items-center'><HiMenuAlt3 className='w-4 h-4 md:w-5 md:h-5'/> </button>
            </li>
            <li className="">
                  <Link href="/" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3 w-full'>
                      <HiOutlineHome className='myHome w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                        صفحه اصلی
                      </span>
                      <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myHome" place="left">
                             صفحه اصلی                
                      </Tooltip>
                  </Link>  
            </li>
            <li className="">
                  <Link href="/profile" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <LuLayoutDashboard className='myDashboard w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                              داشبورد
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myDashboard" place="left">
                           داشبورد               
                  </Tooltip> 
            </li>
            <li className="">
                  <Link href="/profile/me" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <BsInfoSquare className='myUsers w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                      اطلاعات کاربری
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myUsers " place="left">
                        اطلاعات کاربری                
                  </Tooltip>
            </li>
            <li className="">
                  <Link href="/profile/payments" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <FaRegRectangleList className='myOrders w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                      سفارشات شما
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myOrders" place="left">
                       سفارشات شما               
                  </Tooltip>
            </li>
            <li className="">
                  <button onClick={logoutHandler} className='p-1 w-full hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                        <HiOutlineLogout className='myLogout w-4 h-4 md:w-5 md:h-5'/>
                        <span className={`${open ? 'hidden' : 'block'}`}>
                              خروج از حساب کاربری
                        </span>
                  </button>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myLogout" place="left">
                           خروج از حساب کاربری               
                  </Tooltip>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar