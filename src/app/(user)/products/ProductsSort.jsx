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
  console.log(searchParams.get("category")?.split(",") ||[]);
  
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
        <div className="col-span-1">
                <h1 className="font-bold mb-3">مرتب سازی محصولات</h1>
                <ul className="flex flex-col gap-y-3">
                    {
                        sortOptions.map(s => {
                            return <RadioInput_Field
                                key={s._id}
                                id={s._id}
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