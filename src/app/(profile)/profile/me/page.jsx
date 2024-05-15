'use client'
import Text_Field from '@/common/Text_Field';
import useGetUser from '@/hooks/useGetUser';
import { updateProfile } from '@/services/authServices';
import { includeObj } from '@/utils/objectUtils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Circles, ThreeDots } from 'react-loader-spinner';

const MePanel = () => {
  const queryClient = useQueryClient();
    const [formData, setFormData] = useState('');
     const {data,isLoading } = useGetUser();
     const { user } = data || {};
     const {isLoading:isUpdating,mutateAsync}=useMutation({mutationFn:updateProfile})

    const userkeys = ['name', 'email', 'phoneNumber', 'biography'];

     useEffect(() => {
        if (user) setFormData(includeObj(user, userkeys));
     }, [user]);

    // includeObj return a Object with  name and value userKeys array 
  const submitHandler = async(e) => {
      e.preventDefault();
        try {
            const {message}= await mutateAsync(formData);
            queryClient.invalidateQueries({queryKey:['get-user']}),
            toast.success(message)
            
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
  if (isLoading) return <ThreeDots  width='30px' color='blue' wrapperStyle={{display:"flex",justifyContent:'center'}}/>
  return (
    <div className='flex justify-center '>
            <form onSubmit={submitHandler} className='w-1/2'>
                {Object.keys(includeObj(user, userkeys)).reverse().map((key) => {
                        return (
                            <div key={key} className="mb-8">
                                <Text_Field
                                label={key}
                                name={key}
                                key={key}
                                value={formData[key] || ""}
                                onChange={(e) =>
                                  setFormData({ ...formData, [e.target.name]: e.target.value })
                                    }
                            />
                            </div>
                        );
                })}
        
                {
              isUpdating ?
                  <Circles  height='50px' color='blue' />
                  :
                  <button type='submit' className='btn wh btn--primary w-full flex justify-center'>
                        تایید
                  </button>
                }
            </form>
    </div>
  )
}

export default MePanel