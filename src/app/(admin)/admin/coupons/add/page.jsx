'use client'
import CouponsForm from '@/components/CouponsForm'
import { useAddCoupon } from '@/hooks/useCoupon'
import { useGetProducts } from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddCoupen = () => {

  const router = useRouter();
  const {data} = useGetProducts();
  const { products } = data || {};

  const {isPending,mutateAsync } = useAddCoupon();

  const [formData, setFormData] = useState({
    code: '',
    amount: '',
    usageLimit: '',
  });
  const [type, setType] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date())

  const onChangeHandler = (e) => {
    setFormData ({...formData,[e.target.name]:e.target.value})
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        productIds: selectedProducts.map(p=>p._id),
        expireDate:new Date(expireDate).toISOString()
      });
      router.push("/admin/coupons");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className='flex flex-col  gap-y-10'>
        <h1 className='font-bold text-secondary-600'>افزودن کد تخفیف </h1> 
        <CouponsForm
          formData={formData}
          onFormChange={onChangeHandler}
          onFormSubmit={onSubmitHandler}
          type={type}
          setType={setType}
          options={products}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          expireDate={expireDate}
          setExpireDate={setExpireDate}
          isLoading={isPending}
        />
    </div>
  )
}

export default AddCoupen