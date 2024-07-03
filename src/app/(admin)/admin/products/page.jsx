'use client'
import React, { useState } from 'react'
import ProductsTable from './ProductsTable'
import { useAddProduct, useGetProducts } from '@/hooks/useProducts'
import { ThreeDots } from 'react-loader-spinner';
import { IoAddCircle, IoCloseOutline } from 'react-icons/io5';
import { useGetCategories } from '@/hooks/useCategories';
import toast from 'react-hot-toast';
import ProductForm from '@/components/productForm';




const Products = () => {

  const [modal, setModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
  });

  const { refetch ,isLoading, data } = useGetProducts();
  const { products } = data || {};

  const { data:categoryData } = useGetCategories();
  const {categories } = categoryData || {};
 
  const { isLoading: isProducting, mutateAsync } = useAddProduct();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    // console.log({values,Tags,selectedCategory})
    e.preventDefault();
     try {
       const { message } = await mutateAsync({...formData,tags,category:selectedCategory._id});
       setModal(false);
       refetch();
       toast.success(message);
     } catch (error) {
      toast.error(error?.response?.data?.message)
     }
  }
  

  return (
    <div className='relative h-full w-full'>
      <div className="flex items-center justify-between">
          <h1 className="font-bold text-secondary-500 mb-6">محصولات</h1>
          <div className="">
            <button onClick={()=>setModal(prev=>!prev)}  className='btn text-primary-900 flex items-center gap-x-1'><IoAddCircle className='text-primary-900 w-6 h-6'/>افزودن محصولات</button>
           </div> 
      </div>
      {
        modal &&
        <div className="absolute w-full h-full top-0 left-0 bg-black/20 backdrop-blur-sm z-30 flex items-center justify-center" onClick={()=>setModal(false)} >
            <div className="flex flex-col overflow-y-scroll h-3/4 bg-white w-1/2 text-secondary-600 rounded-xl p-4 z-50" onClick={(e)=>e.stopPropagation()}>
              <header className='flex justify-between items-center'>
                <h2 className="text-lg font-medium">افزودن محصولات</h2>
                <IoCloseOutline onClick={()=>setModal(prev=>!prev)}  className='text-black h-6 w-6' />
              </header>
              <hr className='text-black w-full h-0.5 my-2' />
              <section>
              <ProductForm
                        onSubmitProduct={handleSubmit}
                        value={formData}
                        onChange={handleChange}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                        tags={tags}
                        setTags={setTags}
                        onClose={()=>setModal(prev=>!prev)}
                        isProducting={isProducting}
                        btnLabel='افزودن محصول'
              />
               
              </section>
            </div>
        </div>
      }
      {
       isLoading ? <div className="h-screen flex items-center justify-center">
                        <ThreeDots  height='30px' color='blue' />
                   </div>
                 :
                   <ProductsTable products={products} />
      }
      
    </div>
  )
}

export default Products