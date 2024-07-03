'use client'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ReadMore = ({children}) => {

    
    const [isReadMore,setIsReadMore]=useState(true);
    const toggleReadMore=()=>{
        setIsReadMore(!isReadMore);
    }
  return (
    <>
            <div className={`leading-8 ${isReadMore ? 'text-ellipsis line-clamp-3' : '' }`}>
            {
                children
            }
            </div>
            <button 
                className="btn block text-[#027b9a] mt-2 transition-all duration-400 ease-linear"
                onClick={toggleReadMore}
            >
                        {isReadMore ? <span className='flex items-center gap-x-1'>نمایش بیشتر  <FaChevronDown className='w-4 h-4' /></span> : <span className='flex items-center gap-x-1'>بستن  <FaChevronUp className='w-4 h-4' /></span> }
            </button>
    </>
  )
}

export default ReadMore