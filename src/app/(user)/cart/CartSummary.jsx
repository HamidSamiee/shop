import { createPayment } from '@/services/paymentServices';
import { toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';

const CartSummary = ({ payDetail }) => {
  const { totalGrossPrice, totalOffAmount, totalPrice } = payDetail;
  
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation({mutationFn:createPayment});
  
  const paymentHandler = async() => {

    try {
           const { message } = await mutateAsync();
           toast.success(message);
           queryClient.invalidateQueries(["get-user"])
       } catch (error) {
        toast.error(error?.response?.data?.message)
       } 
  }


  return (
    <div className='flex flex-col gap-5 border rounded-xl border-gray-500 p-4 '>
      <p className="font-bold text-xl"> اطلاعات پرداخت</p>
      <div className="flex items-center justify-between">
        <span className="">جمع کل</span>
        <span className="">{toPersianDigitsWithComma(totalGrossPrice)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="">تخفیف</span>
        {
          totalOffAmount>0 ? <span className="">{toPersianDigitsWithComma(totalOffAmount)}-</span> :<span className="">-</span>  
        }
        
        
      </div>
      <hr className='bg-gray-300' />
      <div className="flex items-center justify-between font-bold">
        <span className="">مبلغ قابل پرداخت</span>
        <span className="text-rose-500">{toPersianDigitsWithComma(totalPrice)}</span>
      </div>
      <button className='btn btn--primary' onClick={paymentHandler}>
              ثبت سفارش
      </button>
    </div>
  )
}

export default CartSummary
