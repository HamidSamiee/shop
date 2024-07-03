import {toPersianDigits} from '@/utils/toPersianDigits'
import React from 'react'
import { Circles } from 'react-loader-spinner'
import OTPInput from 'react-otp-input'
import { MdKeyboardBackspace } from "react-icons/md";

const CheckOTPForm = ({otpResponse, onSubmit, checkPending,otp,setOtp,setStep,time,onResendOtp }) => {
    

  return (
      <form className='space-y-6' onSubmit={onSubmit}>
          <div className="">
                <button className="text-primary-900 mb-4" onClick={()=>setStep(s=>s-1)}>
                    <MdKeyboardBackspace className='rotate-180 font-bold' />
                </button>
                <p className="">
                  {otpResponse && <p className=' text-sm '>{otpResponse?.message}</p>}
                </p>
                
                <div className="">
                        { time > 0 ?
                      <p className=' p-1 md:w-2/5 text-sm flex items-center gap-x-3 '>
                          <span className='font-bold text-red-400 w-2 '>{toPersianDigits(time)}</span>
                          <p className="text-primary-900">ثانیه تا ارسال مجدد کد  </p>
                      </p>
                        :
                        <button
                            className="text-primary-900 font-bold p-1"
                            onClick={onResendOtp}
                        >
                            ارسال مجدد کد ؟
                        </button>
                    }
                </div>
                
          </div>
          <p className="font-bold ">کد تایید را وارد کنید</p>
          <OTPInput
                className="textField__input"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                inputStyle='scale-125  md:scale-150 md:w-5 md:px-0.5 md:py-0.2  border border-primary-300 rounded'
                
                containerStyle=" flex gap-x-2 flex-row-reverse justify-center"
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