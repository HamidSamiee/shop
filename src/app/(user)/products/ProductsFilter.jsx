'use client'

import Checkbox_Field from '@/common/Checkbox_Field'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

const ProductsFilter = ({ categories }) => {
    
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(searchParams.get("category")?.split(",") || [] );
  
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

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([... selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category",[...selectedCategories, value])
      );
    }
  };

  return (
      <div>
          <div className="col-span-1">
                <h1 className="font-bold mb-3">دسته بندی محصولات</h1>
                <ul className="flex flex-col gap-y-3">
                    {
                        categories.map(category => {
                            return <Checkbox_Field
                                key={category._id}
                                category={category}
                                id={category._id}
                                name='product_type'
                                value={category.englishTitle}
                                checked={selectedCategories.includes(category.englishTitle)}
                                onChange={categoryHandler}
                            />
                        })
                    }
                </ul>
          </div>
      </div>
  )
}

export default ProductsFilter