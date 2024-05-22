import { useAddToCart } from '@/hooks/useAddToCart';
import { useRemoveFromCart } from '@/hooks/useRemoveFromCart';
import {  toPersianDigits,toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import {  useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoTrashOutline } from "react-icons/io5";


const CartItems = ({ product }) => {

    const queryClient = useQueryClient();

    const { mutateAsync:mutateAdd } = useAddToCart();
    const { mutateAsync: mutateRemove } = useRemoveFromCart();
    

    const decrementHandler = async () => {
       try {
           const { message } = await mutateRemove(product._id);
           toast.success(message);
           queryClient.invalidateQueries(["get-user"])
       } catch (error) {
        toast.error(error?.response?.data?.message)
       } 
    }
    const incrementHandler = async () => {
       try {
           const { message } = await mutateAdd(product._id);
           toast.success(message);
           queryClient.invalidateQueries(["get-user"])
       } catch (error) {
        toast.error(error?.response?.data?.message)
       } 
    }
    

  return (
      
          <div className="w-full flex items-center justify-between mb-2 border border-gray-500 rounded-lg px-3 py-2 ">
              <div className="flex-1 font-bold text-lg ">
                  {product.title}
              </div>
              
              <div className="flex items-center justify-between gap-x-3 flex-1 "> 
                    <div>
                        <div className='font-bold'>
                            قیمت :{" "}
                            <span
                            className={`${
                                product.discount ? "line-through text-gray-500" : "font-bold"
                            }`}
                            >
                            {toPersianDigitsWithComma(product.price)}
                            </span>
                        </div>
                        {!!product.discount && (
                            <div className="flex items-center gap-x-2 mt-2">
                            <p className="font-bold">
                                {" "}
                                {toPersianDigitsWithComma(product.offPrice)}
                            </p>
                            <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                                {toPersianDigits(product.discount)} %
                            </div>
                            </div>
                         )}
                    </div>
                    <div className="flex items-center justify-between gap-x-3">
                        <span className='ml-4 font-bold'>تعداد : {toPersianDigits(product.quantity) }</span>
                        <button onClick={incrementHandler} className="p-2 rounded-md bg-primary-900 text-white">
                                <FaPlus className='w-4 h-4' />
                        </button>
                        <button onClick={decrementHandler}  >
                        { product.quantity >1
                            ?
                            <div className="p-2 rounded-md border border-gray-400 bg-white text-secondary-900">
                                <FaMinus className=' w-4 h-4' />
                            </div>
                            :
                            <IoTrashOutline className='stroke-rose-500 w-8 h-8' />
                        }
                        </button>
                    </div>
                    
              </div>
           
           </div> 
  )
}

export default CartItems