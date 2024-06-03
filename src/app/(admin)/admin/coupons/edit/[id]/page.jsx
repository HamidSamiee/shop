"use client"
import CouponsForm from '@/components/CouponsForm'
import { useGetCouponById, useUpdateCoupon } from '@/hooks/useCoupon';
import { useGetProducts } from '@/hooks/useProducts';
import toLocalDate from '@/utils/toLocalDate';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const EditCoupon = () => {

  const router = useRouter();
  const { id } = useParams();
  const {data:dataCoupon } = useGetCouponById(id);
  const { coupon } = dataCoupon || {};
  // console.log(coupon)
     
  const {data} = useGetProducts();
  const { products } = data || {};

  const {isPending,mutateAsync } = useUpdateCoupon();

  const [formData, setFormData] = useState({});
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
        couponId: id,
        data: {
          ...formData,
          type,
          productIds: selectedProducts.map(p=>p._id),
          expireDate:new Date(expireDate).toISOString()
        }
      });
      router.push("/admin/coupons");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  useEffect(() => {
    
    if (coupon) {
      setFormData({
        code: coupon.code,
        amount: coupon.amount,
        usageLimit: coupon.usageLimit,
      });
      setType(coupon.type);
      setSelectedProducts(coupon.productIds);
      setExpireDate(toLocalDate(coupon.expireDate));
    }
  
  }, [coupon])
  


  return (
    <div className='flex flex-col gap-y-10'>
        <h1 className='font-bold text-secondary-600'>ویرایش کد تخفیف </h1> 
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

export default EditCoupon