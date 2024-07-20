"use client"
import React, { useEffect, useState } from 'react'
import SendOTPForm from './SendOTPForm';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { checkOtp, getOtp } from '@/services/authServices';
import CheckOTPForm from './CheckOTPForm';
import { useRouter } from 'next/navigation';
const RESEND_TIME = 90;

const AuthPage = () => {

    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [time, setTime] = useState(RESEND_TIME);
    const router = useRouter();

    useEffect(() => {
        
        const timer = time > 0 && setInterval(() =>setTime((t)=> t - 1), 1000);
        return () => {
            if(timer) clearInterval(timer)
        }

    },[time])

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    const {data:otpResponse,isPending:getPending,mutateAsync:mutateGetOtp } = useMutation({
        mutationFn:getOtp,
    })
    const {isPending:checkPending,mutateAsync:mutateCheckOtp } = useMutation({
        mutationFn:checkOtp,
    })

    const sendOtpHandler = async(e) => {
        e.preventDefault();
        try {
            // const data = await mutateGetOtp({phoneNumber});
            // toast.success(data.message);
            toast.success('کد تایید به شماره شما ارسال شد');
            setStep(2);
            setTime(RESEND_TIME);
            setOtp('');
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }
    const checkOtpHandler = async(e) => {
        e.preventDefault();
        try {
            const {message,user}= await mutateCheckOtp({phoneNumber,otp});
            toast.success(message)
            if (user.isActive) {
                // router.push("/");
                document.location.replace('/');
            } else {
                router.push("/complete-profile")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }

    const renderSteps = () => {
       switch (step) {
        case 1:
               return (<SendOTPForm
                            value={phoneNumber}
                            onChange={phoneNumberHandler}
                            onSubmit={sendOtpHandler}
                            getPending={getPending}
                      />)
        case 2:
               return (<CheckOTPForm
                            otp={otp}
                            setOtp={setOtp}
                            setStep={setStep}
                            onSubmit={checkOtpHandler}
                            checkPending={checkPending}
                            time={time}
                            onResendOtp={sendOtpHandler}
                            otpResponse={otpResponse}
                      />)
        default:
               return null;   
       } 
    }

  return (
    <div className='flex justify-center w-full'>
        <div className='w-2/4  sm:max-w-sm'>
              {
                  renderSteps()
              }
        </div>
    </div>
  )
}

export default AuthPage