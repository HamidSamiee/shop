'use client'

import Checkbox_Field from '@/common/Checkbox_Field'
import useOutsideClick from '@/hooks/useOutsideClick'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

const ProductsFilter = ({ categories }) => {
  const [filterOpen, setFilterOpen] = useState(true)  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(searchParams.get("category")?.split(",") || [] );
  const ref=useOutsideClick(()=>setFilterOpen(false));

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
    console.log(value)
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
      <div className="">
        {/*Desktop sort  */}
            <div className='hidden md:block border-1 rounded-md border-secondary-600 bg-secondary-50 md:border-none md:bg-white'>
             <div className="col-span-1">
                <h1 className="font-bold mb-1 md:mb-3 whitespace-nowrap flex gap-x-1" onClick={()=>setfilterOpen(!filterOpen)}>دسته بندی <span className='hidden md:block'>محصولات</span></h1>
                <ul className="hidden md:flex gap-x-3 md:flex-col md:gap-y-3" >
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
       {/*mobile sort  */}
            <div ref={ref} className=' flex items-center justify-start md:hidden'>
              <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
                  <li className="">
                    <input className="peer sr-only" type="radio" value="no" name="answer" id="category" />
                    <label onClick={()=>setFilterOpen(!filterOpen)} className={`flex w-fit justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-1 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 ${filterOpen ===true && `peer-checked:ring-indigo-500` }  transition-all duration-500 ease-in-out whitespace-nowrap`} htmlFor="category"> دسته بندی</label>
                    {
                      filterOpen &&
                      <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[96vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                        <ul className="flex items-center gap-x-8 justify-start " >
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
                    }
                    
                  </li>

              </ul>
            </div>
      </div>
      
  )
}

export default ProductsFilter