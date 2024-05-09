"use client"
import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import http from '@/services/httpServices';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '@/services/authServices';

const AuthPage = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    const {data,error,isPending,mutateAsync:mutateGetOtp } = useMutation({
        mutationFn:getOtp,
    })

    const sendOTPHandler = async(e) => {
        e.preventDefault();
        try {
            const data = await mutateGetOtp({phoneNumber});
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }

  return (
    <div className='flex justify-center '>
        <div className='w-full sm:max-w-sm'>
              <SendOTPForm value={phoneNumber} onChange={phoneNumberHandler} onSubmit={sendOTPHandler} isPending={isPending}  />
        </div>
    </div>
  )
}

export default AuthPage