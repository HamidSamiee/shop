'use client'
import RadioInput_Field from '@/common/RadioInput_Field'
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
    <div>
        <div className="col-span-1 flex flex-col items-start">
                <h1 className="font-bold mb-1 md:mb-3 flex whitespace-nowrap gap-x-1">مرتب سازی<span className='hidden md:block'>محصولات</span></h1>
                <ul className="hidden md:flex gap-x-3 justify-start md:flex-col md:gap-y-3 ">
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
    </div>
  )
}

export default ProductsSort