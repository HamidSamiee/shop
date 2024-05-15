"use client"
import { completeProfile } from '@/services/authServices';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Circles } from 'react-loader-spinner';

const CompleteProfile = () => {


    const { handleSubmit, register,formState:{errors} } = useForm();

    const { isPending:isCompletingProfile,mutateAsync} = useMutation({
        mutationFn:completeProfile
    })

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const {message,user}= await mutateAsync(data);
            toast.success(message)
           console.log(message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }

  return (
      <div className='flex justify-center '>
          <div className='w-full sm:max-w-sm'>
              
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                    <div>
                      <label htmlFor="name" className=' mb-2 flex justify-between items-center'>نام و نام خانوادگی
                            {errors.name?.type === "required" && (
                                <small className='text-red-500'>نام کاربری را وارد کنید</small>
                            )}

                            {errors.name?.type === "minLength" && (
                                <small className='text-red-500'>نام کاربری حداقل باید ۵ کاراکتر باشد</small>
                            )}

                            {errors.name?.type === "matchPattern" && (
                                <small className='text-red-500'>نام کاربری باید حداقل یک کاراکترحروف و کاراکتر عددو کاراکتر خاص باشد</small>
                            )}
                      </label>
                        <input
                            id="name"
                            {...register('name', {
                                required: true,
                                validate: {
                                    minLength: (v) => v.length >= 5,
                                    matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                                }
                            })}
                            className='textField__input'
                        />
                         
                    </div>

                    <div>
                      <label htmlFor="email" className='mb-2 flex justify-between items-center'>ایمیل
                          {errors.email?.message && (
                            <small className='text-red-500'>{errors.email.message}</small>
                        )}
                        </label>
                        <input
                            id="email"
                            {...register("email", {
                            required: "ایمیل را وارد کنید",
                            validate: {
                                maxLength: (v) =>
                                v.length <= 50 || "ایمیل باید کمتر از ۵۰ کاراکتر باشد",
                                matchPattern: (v) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                "ایمیل نامعتبر است",
                            },
                            })}
                            className='textField__input'
                        />

                        
                    </div>
                    {
                        isCompletingProfile ?
                            <Circles  height='50px' color='blue' />
                            :
                            <button type='submit' className='btn wh btn--primary w-full flex justify-center'>
                                    تایید
                            </button>
                    }
              </form>

        </div>
    </div>
  )
}

export default CompleteProfile