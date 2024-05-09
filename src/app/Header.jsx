import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className='shadow-md mb-10'>
          
        <nav>
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
                    <Link href='/auth' >
                    ورود
                    </Link>
                </li>
            </ul>
        </nav>

      </header>
  )
}

export default Header