"use client"

import useGetUser from '@/hooks/useGetUser'
import {toPersianDigits} from '@/utils/toPersianDigits'
import Link from 'next/link'
import {  useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { FaChevronLeft, FaHome, FaMobileAlt, FaUser } from 'react-icons/fa'
import { IoMenu, IoSearch, IoClose,IoLogInOutline, IoLogOut } from 'react-icons/io5';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { logoutProfile } from '@/services/authServices'
import { useGetProducts } from '@/hooks/useProducts'
import { useDebounce } from 'use-debounce'
import { IoCartOutline } from "react-icons/io5";
import { MdAdminPanelSettings, MdContactPhone, MdLaptopMac } from 'react-icons/md'
import { AiFillProduct } from 'react-icons/ai'
import { SiGitbook } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import Image from 'next/image'
import useOutsideClick from '@/hooks/useOutsideClick'



const Header = () => {

    const router = useRouter();

    const [menu,setMenu] = useState(false);

    const[dropdownMenu,setDropdownMenu]=useState(false);

    
    const ref=useOutsideClick(()=>setDropdownMenu(false))
    

    const { data:dataUser } = useGetUser();
    const {data,isLoading} = useGetProducts();

    // console.log(dropdownMenu)
    
    
    const { user, cart } = dataUser || {};
    // console.log({ user, cart })
    


   const searchParams = useSearchParams();
   const [searchInput, setSearchInput] = useState(searchParams.get("search") || [] );
//   console.log(products?.map(p => p.title))

   const [searchQuery] = useDebounce(searchInput, 500);


    const handleClick = (e) => {
        e.preventDefault()
        router.push('/auth')
    }

    const logoutHandler =async ()=>{

    await logoutProfile();  

    document.location.reload();
    
    }
    
    const handelSubmitSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (searchQuery) {
            params.set('search', searchQuery);
        } else {
            params.delete('search');
        }
        router.push(`/products/?${params}`);
        setMenu(false);
    }

  return (
      <header className='relative z-10 shadow-md mb-6 bg-gradient-to-tr from-[#00abe4] via-[#dce9f9] to-[#60efff]'>
          
{/* Mobile navbar */}
            <nav className={`${isLoading ? 'blur-sm opacity-70' : 'blur-0 opacity-100'} relative p-4 flex justify-between items-center  md:hidden`}>
                <button onClick={()=>setMenu(!menu)}>     
                        <IoMenu className='w-6 h-6'/>
                </button>
                <Link href='/' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="font-bold relative block">
                                    <Image 
                                            src="/images/logo/stars-color-icon.png"
                                            alt="star logo"
                                            width={30}
                                            height={29}
                                            sizes='(min-width: 320px) 30px,(min-width: 1024px) 40px'
                                            className='object-contain'
                                    />  
                            </h1>
                </Link>
                <div className="flex items-center gap-x-1.5">
                        <span className="block relative  py-2">
                                                    <Link href='/cart' className='flex items-center gap-x-2 text-xs my-anchor-cart' >
                                                            <IoCartOutline className='w-5 h-5 ' /> 
                                                            <span className="absolute -top-2 -right-2 badge badge--success bg-rose-500 rounded-full text-white text-base font-bold scale-50">
                                                                {cart ? toPersianDigits( cart.payDetail.productIds.length) : toPersianDigits(0)}
                                                            </span>
                                                    </Link>
                                                    <Tooltip className='text-xs' anchorSelect=".my-anchor-cart" place="bottom">
                                                        سبد خرید
                                                    </Tooltip>
                        </span>
                        {
                            user ?
                                <span className=''>
                                        <span  className="userprofile">
                                            <CiUser className='w-5 h-5 border border-black rounded-full' />
                                        </span>
                                        <Tooltip className='text-sm' anchorSelect=".userprofile" place="bottom" clickable>
                                            <div className="flex flex-col items-start justify-between text-xs h-16">
                                                        <p className=" "> {user.name} عزیز خوش آمدی </p>
                                                        <Link href={`${user?.role == "ADMIN" ? '/admin':'/profile'}`}  className='flex items-center gap-x-2'>
                                                            {
                                                                user?.role == "ADMIN" ? <MdAdminPanelSettings className='w-4 h-4 fill-green-300'/> :<FaUser className='w-4 h-4 fill-green-300' />
                                                            }  پروفایل شما 
                                                        </Link>
                                                        <button onClick={logoutHandler} className='flex items-center justify-start text-rose-600 gap-x-2'>
                                                            <IoLogOut className='w-4 h-4 fill-rose-600 rotate-180' /> خروج
                                                        </button>
                                            </div>
                                        </Tooltip>
                                </span>  
                                :
                                <Link href='/auth' className='border border-secondary-300 rounded-md p-0.5 flex items-center text-xs gap-x-0.5'>
                                         <IoLogInOutline className='w-5 h-5'/>ورود 
                                </Link>         
                        }
                        
                </div>
               

                {
                    
                    menu  && 
                     <>
                        <div onClick={()=>setMenu((prev)=>!prev)} className=" w-full h-screen absolute  left-0 top-0  z-40  backdrop-blur-sm bg-black/20 transition-all duration-300 ease-linear">   
                        </div>
                        <div className="absolute right-0 top-0 flex flex-col gap-y-5 w-2/5 h-screen z-50 shadow-lg bg-white  transition-all duration-300 ease-in-out">  
                                <button onClick={()=>setMenu((prev)=>!prev)} className='w-6 h-6 p-4'>
                                    <IoClose  className= 'h-6 w-6 stroke-black' />
                                </button>
                                <form className=' relative mx-4 text-sm' onSubmit={handelSubmitSearch}>
                                        <input
                                            type="text"
                                            name="searchBox"
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                            className=' w-11/12 border border-1 border-black outline-none focus:border-primary-500 px-4 py-0.5 rounded-md'
                                            placeholder='جستجوی محصولات'
                                        />
                                        <button type='submit'>
                                            <IoSearch  className= 'animate-pulse absolute top-0.5 -left-2  h-5 w-5 stroke-secondary-400' />
                                        </button>
                                </form>
                                <ul className="flex flex-col items-start gap-y-4 text-sm mr-4">
                                        <Link href='/' className="text-center">
                                                <li className="flex items-center gap-x-1">
                                                    <FaHome className='w-4 h-4'  /> صفحه اصلی
                                                </li>
                                        </Link>
                                       
                                                <li onClick={()=>setDropdownMenu(!dropdownMenu)}  className="">
                                                     <div  className="flex items-center gap-x-1 cursor-pointer "><AiFillProduct className='w-4 h-4'  /> محصولات <FaChevronLeft className={`${dropdownMenu && '-rotate-90'} transition-all duration-300 ease-in-out w-2 h-2`} /> </div>   
                                                     {
                                                        dropdownMenu &&
                                                        <ul className={`flex p-1  flex-col items-start gap-y-3`}  >
                                                            <li className='mr-3 whitespace-nowrap w-full hover:bg-secondary-100'>
                                                                <Link href='/products?category=book' className='w-full flex items-center gap-x-1' >
                                                                  <SiGitbook className='w-4 h-4'/> کتاب 
                                                                </Link>
                                                            </li>
                                                            <li className='mr-3 whitespace-nowrap w-full hover:bg-secondary-100 '>
                                                                <Link href='/products?category=mobile' className='w-full flex items-center gap-x-1' >
                                                                   <FaMobileAlt className='w-4 h-4' /> موبایل
                                                                </Link>
                                                            </li>
                                                            <li className='mr-3 whitespace-nowrap w-full hover:bg-secondary-100 '>
                                                                <Link href='/products?category=laptop' className='w-full flex items-center gap-x-1' > 
                                                                   <MdLaptopMac className='w-5 h-5'/> لپ تاپ
                                                                </Link>     
                                                            </li>
                                                        </ul>
                                                    }
                                                </li>
                                             
                                                
                                        <Link href='/contactus' className="text-center">
                                                <li className="flex items-center gap-x-1">
                                                <MdContactPhone  className='w-4 h-4' /> تماس با ما
                                                </li>
                                        </Link>       
                                </ul>
                        </div>
                    </> 
                }    

                
                
            </nav>  
{/*  Desktop navbar */}
            <nav  className={`${isLoading ? 'blur-sm opacity-70' : 'blur-0 opacity-100'} hidden md:block md:py-4`}>
                <ul className=" flex justify-between items-center py-2 container xl:max-w-screen-xl">
                    
                    <Link href='/' className=" ">
                            <h1 className=" font-bold flex items-center gap-x-2 whitespace-nowrap">
                               <Image 
                                    src="/images/logo/stars-color-icon.png"
                                    alt="star logo"
                                    width={30}
                                    height={29}
                                    sizes='(min-width: 320px) 30px,(min-width: 1024px) 40px'
                                    className='object-contain'
                               />  
                               استار شاپ
                            </h1>
                    </Link> 
                  <li className="">
                    <ul className="flex items-center gap-x-4 text-sm">
                            <Link href='/' className="text-center">
                                    <li className="flex items-center gap-x-0.5">
                                    <FaHome className='w-4 h-4'  /> صفحه اصلی
                                    </li>
                            </Link>
                            <button ref={ref} onClick={()=>setDropdownMenu(!dropdownMenu)} className="relative text-center">
                                    <li  className="flex items-center gap-x-0.5 ">
                                    <AiFillProduct className='w-4 h-4'  /> محصولات  
                                    </li>
                                     {
                                            dropdownMenu  &&
                                            <>
                                                        <div className="absolute top-6 right-9 bg-white text-white shadow-md w-4 rotate-45">f</div> 
                                                    <div className='absolute top-7 right-7 bg-white shadow-lg w-16 p-1 rounded-md text-sm flex flex-col items-start gap-y-2 z-10' >
                                                            <Link href='/products?category=book' className='whitespace-nowrap w-full hover:bg-secondary-100 flex items-center gap-x-0.5' >
                                                              <SiGitbook className='w-4 h-4'/> کتاب 
                                                            </Link>
                                                            <Link href='/products?category=mobile' className='whitespace-nowrap w-full hover:bg-secondary-100 flex items-center gap-x-0.5' >
                                                            <FaMobileAlt className='w-4 h-4' /> موبایل
                                                            </Link>
                                                            <Link href='/products?category=laptop' className='whitespace-nowrap w-full hover:bg-secondary-100 flex items-center gap-x-0.5' >
                                                            <MdLaptopMac className='w-5 h-5'/> لپ تاپ
                                                            </Link>
                                                    </div>
                                                    
                                            </>
                                        }
                            </button>
                           
                            <Link href='/contactus' className="text-center">
                                    <li className="flex items-center gap-x-0.5">
                                    <MdContactPhone  className='w-4 h-4' /> تماس با ما
                                    </li>
                            </Link>       
                    </ul>
                  </li>    
                  <li className='w-2/5'>
                         <form className=' relative mx-4 text-sm' onSubmit={handelSubmitSearch}>
                                        <input
                                            type="text"
                                            name="searchBox"
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                            className=' w-full border border-1 border-black outline-none focus:border-primary-500 px-4 py-1 rounded-md'
                                            placeholder='  دنبال چی میگردی؟ اینجا محصولت رو جستجو کن ...'
                                        />
                                        <button type='submit'>
                                            <IoSearch  className= 'animate-pulse absolute top-1 left-2  h-5 w-5 stroke-secondary-400' />
                                        </button>
                          </form>
                  </li>  
                  <li className='flex items-center gap-x-3'>

                        <span className="block relative  py-2">
                                            <Link href='/cart' className='flex items-center gap-x-2 my-anchor-cart' >
                                                    <IoCartOutline className='w-5 h-5 ' /> 
                                                    <span className="absolute -top-2 -right-2 badge badge--success bg-rose-500 rounded-full text-white text-sm font-bold scale-50">
                                                        {cart ? toPersianDigits( cart.payDetail.productIds.length) : toPersianDigits(0)}
                                                    </span>
                                            </Link>
                                            <Tooltip className='text-sm' anchorSelect=".my-anchor-cart" place="bottom">
                                                 سبد خرید
                                            </Tooltip>
                       </span>

                  {
                        user ?
                            <span>
                                  <Link href='' className="userprofile">
                                      <CiUser className='w-5 h-5 stroke-black border-1 border-black rounded-full' />
                                  </Link>
                                  <Tooltip className='text-sm' anchorSelect=".userprofile" place="bottom" clickable>
                                       <div className="flex flex-col items-start justify-between h-16">
                                                    <p className="text-xs "> {user.name} عزیز خوش آمدی </p>
                                                    <Link href={`${user?.role == "ADMIN" ? '/admin':'/profile'}`}  className='flex items-center gap-x-2'>
                                                         {
                                                            user?.role == "ADMIN" ? <MdAdminPanelSettings className='w-4 h-4 fill-green-300'/> :<FaUser className='w-4 h-4 fill-green-300' />
                                                         }  پروفایل شما 
                                                    </Link>
                                                    <button onClick={logoutHandler} className='flex items-center justify-start text-rose-600 gap-x-2'>
                                                        <IoLogOut className='w-4 h-4 fill-rose-600 rotate-180' /> خروج
                                                    </button>
                                       </div>
                                  </Tooltip>
                            </span>
                            :  
                            <button onClick={handleClick} className='flex items-center gap-x-2 p-1 border border-secondary-300 rounded-md'>
                                        <IoLogInOutline className='w-5 h-5'/>ورود/عضویت 
                            </button>            
                    }
                     
                    
                   </li> 
                </ul>
            </nav>
            
      </header>
  )
}

export default Header