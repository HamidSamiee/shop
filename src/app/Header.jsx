"use client"

import useGetUser from '@/hooks/useGetUser'
import {toPersianDigits} from '@/utils/toPersianDigits'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const { data, isLoading } = useGetUser();

    const { user, cart } = data || {};
// console.log({ user, cart })
  return (
      <header className='shadow-md mb-10 '>
          
        <nav className={`${isLoading ? 'blur-sm opacity-70' : 'blur-0 opacity-100'}`}>
            <ul className="flex justify-between items-center py-2 container xl:max-w-screen-xl">
                <li className="block py-2">
                    <Link href='/' >
                    خانه
                    </Link>
                </li>
            
                <li className="block py-2">
                    <Link href='/products' >
                    محصولات
                    </Link>
                </li>
                <li className="block py-2">
                    <Link href='/profile' >
                    پنل کاربر
                    </Link>
                </li>
                  
                <li className="block py-2">
                    <Link href='/admin' >
                    پنل ادمین
                    </Link>
                </li>
                <li className="block py-2">
                    <Link href='/cart' >
                    سبد خرید  ({cart ? toPersianDigits( cart.payDetail.productIds.length) : toPersianDigits(0)})
                    </Link>
                </li>
                  {
                      user ?
                          <p className="">{user.name}</p>
                          :
                            <li className="block py-2">
                                <Link href='/auth' >
                                ورود
                                </Link>
                            </li>
                }
            </ul>
        </nav>

      </header>
  )
}

export default Header