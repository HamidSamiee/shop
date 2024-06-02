'use client'
import CategoryForm from '@/components/CategoryForm'
import { useGetCategories, useGetCategory, useUpdateCategory } from '@/hooks/useCategories'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const EditCategory = () => {

  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const {mutateAsync,isPending} = useUpdateCategory();
  const { data } = useGetCategory(id);
  const { category } = data || {};
  // console.log(category)

  const onSubmit = async (editData) => {
    // console.log(editData)
    try {
      const { message } = await mutateAsync({
        categoryId:id, data: {
          ...editData,
          type:selectedCategory.value
       }});
       router.push('/admin/categories');
       toast.success(message);
     } catch (error) {
      toast.error(error?.response?.data?.message)
     }
  }

 

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className="font-bold text-secondary-600 mb-5">ویرایش دسته بندی</h1>
      <CategoryForm
        onSubmit={onSubmit}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isLoading={isPending}
        category={category}
      />
    </div>
  )
}

export default EditCategory