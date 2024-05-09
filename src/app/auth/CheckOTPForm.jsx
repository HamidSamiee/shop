import toPersianDigits from '@/utils/toPersianDigits'
import React from 'react'
import { Circles } from 'react-loader-spinner'
import OTPInput from 'react-otp-input'

const CheckOTPForm = ({otpResponse, onSubmit, checkPending,otp,setOtp,setStep,time,onResendOtp }) => {
    

  return (
      <form className='space-y-10' onSubmit={onSubmit}>
          <div className="space-y-3">
                <button className="text-primary-900 mb-4" onClick={()=>setStep(s=>s-1)}>برگشت</button>
                <p className="">
                  {otpResponse && <p className=''>{otpResponse?.message}</p>}
                </p>
                <p className="font-bold">کد تایید را وارد کنید</p>
                <div className="">
                        { time > 0 ?
                        <p className='text-red-400 w-2/5 text-sm flex items-center justify-between'>  <span className='font-bold '>{toPersianDigits(time)}</span>  <span className="text-primary-900">ثانیه تا ارسال مجدد کد  </span></p>
                        :
                        <button
                            className="text-primary-900 font-bold"
                            onClick={onResendOtp}
                        >
                            ارسال مجدد کد ؟
                        </button>
                    }
                </div>
          </div>   
          <OTPInput
                className="textField__input"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                inputStyle={
                    {
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius:"0.5rem"
                    }
                }
                containerStyle="flex gap-x-2 justify-center"
                renderInput={(props) => <input {...props} />}
          />
          <div className="flex justify-center">
              {
              checkPending ?
                  <Circles  height='50px' color='blue' />
                  :
                  <button type='submit' className='btn wh btn--primary w-full flex justify-center'>
                        تایید
                  </button>
          }
          </div>
          

      </form>
  )
}

export default CheckOTPForm