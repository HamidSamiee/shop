'use client'
import React from 'react'
import { IoMdRocket } from 'react-icons/io'
import ScrollToTop from 'react-scroll-up'
import { Tooltip } from 'react-tooltip'

const ScrollToTopButton = () => {
  return (
    <div className='relative z-30'>
        <ScrollToTop showUnder={160} >
                <div className='scrollTop rounded-md border border-black cursor-pointer p-2 flex items-center justify-center bg bg-gradient-to-tr from-sky-200 to-blue-500'>
                        <IoMdRocket className=' w-3 h-3 md:w-5 md:h-5' />
                </div> 
                <Tooltip className='text-xs' anchorSelect=".scrollTop" place="left">
                    بازگشت به بالا
                </Tooltip>
        </ScrollToTop>
    </div>
  )
}

export default ScrollToTopButton