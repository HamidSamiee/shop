'use client'
import Text_Field from '@/common/Text_Field';
import { useAddCategory, useGetCategories } from '@/hooks/useCategories';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { IoAddCircle, IoCloseOutline } from 'react-icons/io5';
import { Circles, ThreeDots } from 'react-loader-spinner';
import CategoriesTable from './CategoriesTable';
import toast from 'react-hot-toast';
import Select from 'react-select'

export const categoriesListsTitles = [
    {
        id: 1,
        label:"عنوان",
        name:"title",
      },
    {
        id: 2,
        label: " عنوان خارجی",
        name:"englishTitle",
  },
      {
        id:3 ,
        label: "توضیحات",
        name:"description",
      },
     
]

export const categoriesTypes = [
    {
        id: 1,
        label:"محصول",
        value:"product",
      },
    {
        id: 2,
        label: " پست ",
        value:"post",
  },
  {
        id:3,
        label: "نظرات",
        value:"comment",
      },
      {
        id:4 ,
        label: "تیکت",
        value:"ticket",
      },
      
]
const initialValues={
      title: "",
      englishTitle:"",
      description: "",
    }

const Categoreis = () => {
  const [modal, setModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');

//  console.log(selectedCategory)
  const { refetch,data, isLoading } = useGetCategories();
  const { categories } = data || {};
// console.log(categories)
  const { mutateAsync } = useAddCategory();
  
  const onSubmit = async (values) => {
    // console.log({...values,type:selectedCategory.value})
    
     try {
       const { message } = await mutateAsync({...values,type:selectedCategory?.value });
       setModal(false);
       refetch();
       toast.success(message);
     } catch (error) {
      toast.error(error?.response?.data?.message)
     }
  }

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <div className='relative w-full h-full '>
       <div className="flex items-center justify-between">
          <h1 className="font-bold text-secondary-500 mb-6">دسته بندی ها</h1>
          <div className="">
            <button onClick={()=>setModal(prev=>!prev)}  className='btn text-primary-900 flex items-center gap-x-2'><IoAddCircle className='text-primary-900 w-6 h-6'/>افزودن دسته بندی</button>
           </div> 
      </div>
     {
        modal &&
        <div className="absolute w-full h-full top-0 left-0 bg-black/20 backdrop-blur-sm z-30 flex items-center justify-center " onClick={()=>setModal(false)}>
            <div className="flex flex-col overflow-y-scroll h-3/4 bg-white w-1/2 text-secondary-600 rounded-xl p-4 z-50" onClick={(e)=>e.stopPropagation()}>
              <header className='flex justify-between items-center'>
                <h2 className="text-lg font-medium">افزودن دسته بندی</h2>
                <IoCloseOutline onClick={()=>setModal(prev=>!prev)}  className='text-black h-6 w-6' />
              </header>
              <hr className='text-black w-full h-0.5 my-2' />
              <section>
                    <form onSubmit={formik.handleSubmit}>
                        {
                          categoriesListsTitles.map(item => {
                            return <Text_Field
                                        key={item.id}
                                        label={item.label }
                                        name={item.name }
                                        value={formik.values.name }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                          })
                            }
                            <div className="">
                              <label htmlFor="" className='mb-2'>نوع</label>
                              <Select
                                className='mb-5'
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
                                <button type='submit'  className='btn btn--primary'>افزودن دسته بندی</button>
                              }
                              <button onClick={()=>setModal(prev=>!prev)}  className='btn px-4 py-3  badge--error'> لغو </button>
                           </footer>
                    </form>
              </section>
              
            </div>
        </div>
      }
      {
       isLoading ? <div className="h-screen flex items-center justify-center">
                        <ThreeDots height='30px' color='blue' />
                   </div>
                 :
                   <CategoriesTable categories={categories} />
      }
      
    </div>
  )
}

export default Categoreis