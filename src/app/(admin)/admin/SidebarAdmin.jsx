'use client'
import { logoutProfile } from '@/services/authServices'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { FaRegRectangleList } from 'react-icons/fa6'
import { HiMenuAlt3, HiOutlineHome, HiOutlineLogout} from 'react-icons/hi'
import { LuLayoutDashboard } from 'react-icons/lu'
import { PiUserListBold} from 'react-icons/pi'
import { TbShoppingCartDiscount} from 'react-icons/tb'
import { Tooltip } from 'react-tooltip'


const SidebarAdmin = () => {

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
                  <Link href="/admin" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
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
                  <Link href="/admin/users" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <PiUserListBold className='myUsers w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                        کاربران
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myUsers " place="left">
                           کاربران                
                  </Tooltip>
            </li>
             <li className="">
                  <Link href="/admin/categories" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <LuLayoutDashboard className='myCategory w-4 h-4 md:w-5 md:h-5'/>
                     <span className={`${open ? 'hidden' : 'block'}`}>
                        دسته بندی ها 
                     </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myCategory " place="left">
                  دسته بندی ها                
                  </Tooltip>
            </li>
             <li className="">
                  <Link href="/admin/products" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <AiOutlineProduct className='myProduct w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                        محصولات
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myProduct" place="left">
                  محصولات               
                  </Tooltip>
            </li>
             <li className="">
                  <Link href="/admin/payments" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <FaRegRectangleList className='myOrders w-4 h-4 md:w-5 md:h-5'/>
                      <span className={`${open ? 'hidden' : 'block'}`}>
                        سفارشات
                      </span>
                  </Link>
                  <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myOrders" place="left">
                           سفارشات               
                  </Tooltip>
            </li>
            <li className="">
                  <Link href="/admin/coupons" className='p-1 hover:bg-[#027b9a] hover:bg-opacity-50 hover:rounded-md flex items-center gap-x-3'>
                      <TbShoppingCartDiscount className='myDiscount w-4 h-4 md:w-5 md:h-5'/>
                     <span className={`${open ? 'hidden' : 'block'}`}>
                        کد تخفیف 
                     </span>
                  </Link>
                 <Tooltip className={` ${open ? 'block' : 'hidden'} text-xs`} anchorSelect=".myDiscount" place="left">
                        کد تخفیف              
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

export default SidebarAdmin