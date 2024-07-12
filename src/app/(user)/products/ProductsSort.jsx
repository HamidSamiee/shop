'use client'
import RadioInput_Field from '@/common/RadioInput_Field'
import useOutsideClick from '@/hooks/useOutsideClick'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

const sortOptions = [
    {
        id: 1,
        value: "latest",
        label:" جدیدترین"
    },
    {
        id: 2,
        value: "earliest",
        label:" قدیمی ترین"
    },
    {
        id: 3,
        value: "popular",
        label:" محبوب ترین"
    }
]

const ProductsSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState('');
  const [sortOptionState, setSortOptionState] = useState(false);
    
  const ref=useOutsideClick(()=>setSortOptionState(false))
  // console.log(searchParams.getAll("category")[0].split(","));
  // console.log(searchParams.get("category")?.split(",") ||[]);
  
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

    const sortHandler = (e) => {
        const value =e.target.value;
        setSort(value);
        router.push(pathname+ "?" + createQueryString("sort",value))
    }
  return (
    <div className=''>
        {/*Desktop sort  */}
        <div className="hidden md:flex col-span-1  flex-col items-start">
                <h1 className="font-bold mb-1 md:mb-3 flex whitespace-nowrap gap-x-1">مرتب سازی<span className='hidden md:block'>محصولات</span></h1>
                <ul className=" md:flex gap-x-3 justify-start md:flex-col md:gap-y-3 ">
                    {
                        sortOptions.map(s => {
                            return <RadioInput_Field
                                key={s.id}
                                id={s.id}
                                label={s.label}
                                name='product_sort'
                                value={s.value}
                                checked={sort===s.value}
                                onChange={sortHandler}
                            />
                        })
                    }
                </ul>
        </div>
        {/*mobile sort  */}
        <div ref={ref} className=' flex items-center justify-start md:hidden'>
              <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
                  <li className="">
                    <input className="peer sr-only" type="radio" value="no" name="answer" id="sort" />
                    <label onClick={()=>setSortOptionState(!sortOptionState)} className="flex w-fit justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-1 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out whitespace-nowrap" htmlFor="sort">مرتب سازی</label>
                    {
                        sortOptionState && <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[96vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                        <ul className=" flex items-center gap-x-8 justify-start  ">
                            {
                                sortOptions.map(s => {
                                    return <RadioInput_Field
                                        key={s.id}
                                        id={s.id}
                                        label={s.label}
                                        name='product_sort'
                                        value={s.value}
                                        checked={sort===s.value}
                                        onChange={sortHandler}
                                    />
                                })
                            }
                        </ul>
                    </div>
                    }
                  </li>

              </ul>
        </div>
    </div>
  )
}

export default ProductsSort