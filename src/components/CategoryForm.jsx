import Text_Field from '@/common/Text_Field'
import { categoriesListsTitles, categoriesTypes } from '@/pages/(admin)/admin/categories/page'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Circles } from 'react-loader-spinner'
import Select from 'react-select'

const CategoryForm = ({category, onSubmit,selectedCategory,setSelectedCategory,isLoading}) => {
 
  


    const router = useRouter();
    const {handleSubmit,register,setValue } = useForm()

    useEffect(() => {
    if (category) {
      setSelectedCategory(categoriesTypes.filter(c => c.value == category.type));
      setValue("title", category?.title);
      setValue("englishTitle", category?.englishTitle)
      setValue("description",category?.description)
    }
  },[category,setSelectedCategory,setValue])
   
  
  return (
              <section className='w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                          categoriesListsTitles.map(item => {
                            return <Text_Field
                                        key={item.id}
                                        label={item.label }
                                        name={item.name }
                                        register={register}
                                    />
                          })
                            }
                            <div className="mb-5">
                              <label htmlFor="" className=''>نوع</label>
                              <Select
                                className='mt-4 mb-8'
                                value={selectedCategory}
                                options={categoriesTypes}
                                onChange={setSelectedCategory}
                              />
                            </div>
                  
                           <footer className='flex items-center justify-between gap-x-3 mt-5'>
                              {
                                isLoading 
                                ?
                                 <Circles height='50px' color='blue' />
                                :
                                <button type='submit'  className='btn btn--primary'>ثبت کردن تغییرات دسته بندی</button>
                              }
                              <button onClick={()=>router.push('/admin/categories')}  className='btn px-4 py-3  badge--error'> لغو </button>
                           </footer>
                    </form>
              </section>
              
            
  )
}

export default CategoryForm