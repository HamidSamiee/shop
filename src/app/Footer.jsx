'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {

    const [inerWidth, setInerWidth] = useState();

    useEffect(() => {
      setInerWidth(window.innerWidth)
  
    }, [inerWidth])

return (
<footer className='relative text-xs sm:text-sm md:text-base overflow-hidden w-full  -z-10'>
     <div className="container  xl:max-w-screen-xl  absolute left-0 right-0 top-[15%]  md:top-1/4 flex flex-col items-center">
           <div className="w-full flex items-center  justify-around pb-2 ">
                <Image 
                        src="/images/logo/stars-color-icon.png"
                        alt="star logo"
                        width={50}
                        height={49}
                        unoptimized
                        sizes='(min-width: 320px) 25px,(min-width: 1024px) 40px'
                        className='object-contain'
                />
                
           </div>
           <hr className='h-[1px] mx-auto w-10/12 bg-[#027b9a] mb-2 md:mb-4 xl:mb-6' />
           <div className="w-full grid place-items-center gap-2 text-sm md:text-base grid-cols-2 md:grid-cols-3">
            
                <ul className="md:space-y-2">
                        <li className="/"> 
                                <Link href=''>صفحه اصلی</Link>
                        </li>
                        <li className=""> 
                             <Link href=''>منو2</Link>
                        </li>
                        <li className="">  
                                   <Link href=''>منو3</Link>
                        </li>
                        <li className=""> 
                               <Link href=''>تماس با ما</Link>
                        </li> 
                </ul> 
                <ul className="md:space-y-2">
                        <li className="font-bold">محصولات </li>
                        <li className="">
                            <Link href='/products?category=book'>کتاب</Link>
                        </li>
                        <li className="">
                             <Link href='/products?category=mobile'>موبایل</Link>
                        </li>
                        <li className=""> 
                            <Link href='/products?category=laptop'>لپ تاپ</Link>
                        </li>
                </ul> 
                <form className={`${inerWidth >= 768 && ' flex'} hidden md:block flex-col justify-between  space-y-2 w-full lg:w-1/2 `}>
                    <label htmlFor="subscribe" className='block text-center whitespace-nowrap'>
                        مشترک شدن در خبرنامه ما
                    </label>
                    <input className='w-full placeholder-opacity-50 rounded-md p-1' type="email" name="subscribe" id="subscribe" placeholder='لطفا ایمیل خود را وارد کنید' />
                    <button className="btn btn--info bg-[#027b9a] w-full py-1">
                        ارسال
                    </button>
                </form>
           </div>
           <form className={`mx-auto flex items-center  gap-2 md:hidden mt-3`}>
                    <label htmlFor="subscribe" className=''>
                        مشترک شدن در خبرنامه ما
                    </label>
                    <input className='rounded-md p-1' type="email" name="subscribe" id="subscribe" />
                    <button className="btn btn--info bg-[#027b9a] py-1">
                        ارسال
                    </button>
           </form>
    </div>
     <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg"   viewBox={`0 0 1440 ${inerWidth < 500 ? 1000 : inerWidth < 1024 ? 700 : 500 }`} >
                        <defs>
                            <linearGradient id="Gradient1" >
                                <stop stopColor='#00abe4' offset="0%" />
                                <stop stopColor='#dce9f9' offset="35%" />
                                <stop stopColor='#60efff' offset="100%" />
                            </linearGradient>
                        </defs>
                        <path 
                        fill='url(#Gradient1)'
                         d={`${inerWidth < 500 ? 'M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,1000L1392,1000C1344,1000,1248,1000,1152,1000C1056,1000,960,1000,864,1000C768,1000,672,1000,576,1000C480,1000,384,1000,288,1000C192,1000,96,1000,48,1000L0,1000Z': inerWidth < 1024 ? 'M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,700L1392,700C1344,700,1248,700,1152,700C1056,700,960,700,864,700C768,700,672,700,576,700C480,700,384,700,288,700C192,700,96,700,48,700L0,700Z' : 'M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,500L1392,500C1344,500,1248,500,1152,500C1056,500,960,500,864,500C768,500,672,500,576,500C480,500,384,500,288,500C192,500,96,500,48,500L0,500Z'}`}
                         >
                         </path>
                </svg> 

                <div className="container xl:max-w-screen-xl relative  "> 
                    <svg className="h-8 w-36 md:h-[54px] md:w-[236px] block absolute left-0 -top-8 md:-top-[52px] border-0 outline-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path fill='#027b9a' d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                    </svg>
                    <Link className=" block p-1 absolute h-5 w-5 md:h-7 md:w-7 left-[10px] -top-6 md:left-3 md:-top-[33px]" href="#" target="_blank">
                        <span className="absolute clip-rect-style overflow-hidden h-[1px] w-[1px] p-0 border-0 top-2/4">Linkedin</span>
                        <FaLinkedinIn className='h-4 w-4 md:w-6 md:h-6 text-white' /> 
                    </Link>
                    <Link className="block p-2.5 absolute h-6 w-6 md:h-8 md:w-8 left-12 -top-9  md:left-[75px] md:-top-12" href="#" target="_blank">
                        <span className="absolute clip-rect-style overflow-hidden h-[1px] w-[1px] p-0 border-0 top-2/4">Twitter</span>
                        <FaXTwitter className='h-5 w-5 md:w-7 md:h-7 text-white' />
                    </Link>
                    <Link className="block p-2.5 absolute h-5 w-5 md:h-7 md:w-7 left-[85px] -top-7 md:left-[140px] md:-top-10" href="#" target="_blank">
                        <span className="absolute clip-rect-style overflow-hidden h-[1px] w-[1px] p-0 border-0 top-2/4">Youtube</span>
                        <FaYoutube className='h-4 w-4 md:h-6 md:w-6 text-white'/>
                    </Link>
                    <Link className="block p-2.5 absolute h-5 w-5 md:h-7 md:w-7 left-[119px] -top-8  md:left-[192px] md:-top-10" href="#" target="_blank">
                        <span className="absolute clip-rect-style overflow-hidden h-[1px] w-[1px] p-0 border-0 top-2/4">Github</span>
                        <FaGithub className='h-4 w-4 md:h-6 md:w-6 text-white'/> 
                    </Link>
                </div>

                <div className="w-full bg-[#027b9a] text-white px-1.5 py-3 md:px-[15px] md:py-[30px] text-center">
                    <div className="container xl:max-w-screen-xl">
                        <p className="text-sm md:text-lg">
                            ©2024 | طراحی توسط : حمید سمیعی 
                        </p>
                    </div>
                </div>
     </div>
</footer>      
      


  )
}

export default Footer