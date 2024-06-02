'use client'
import ProductForm from '@/components/ProductForm';
import { useGetCategories } from '@/hooks/useCategories';
import { useGetProduct, useUpdateProduct } from '@/hooks/useProducts';
import { includeObj } from '@/utils/objectUtils';

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';



const includsProductKeys = [
   "title","description","slug","discount","brand","price","offPrice","countInStock","imageLink" 
]

const EditProduct = () => {

  const router = useRouter();
  
  const { id } = useParams();
  const { isLoading,data } = useGetProduct(id);
  const { product } = data || {};
  
  const [formData, setFormData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState([]);  
  
  const { data:categoryData } = useGetCategories();
  const { categories } = categoryData || {};
 
    const {mutateAsync } = useUpdateProduct();  
    
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        productId: product._id,
        data: {
          ...formData,
          tags,
          category: selectedCategory._id,
        },
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setTags(product.tags);
      setSelectedCategory(product.category);
      setFormData(includeObj(product, includsProductKeys));
    }
  }, [product]); 
    
    // console.log(formData)

  return (
    <div className="flex justify-center w-full">
        <ProductForm
            onSubmitProduct={handleSubmit}
            value={formData}
            onChange={handleChange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            tags={tags}
            setTags={setTags}
            onClose={()=>router.push('/admin/products')}
            isProducting={isLoading}
            btnLabel='ثبت تغییرات محصول'
            className='w-1/2'
    />
    </div>
  )
}

export default EditProduct