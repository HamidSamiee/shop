import Text_Field from '@/common/Text_Field'
import React from 'react'
import { Circles } from 'react-loader-spinner'

const SendOTPForm = ({value,onChange,onSubmit,getPending}) => {
  return (
      <form className='space-y-6 ' onSubmit={onSubmit}>
        <div className="rounded-xl p-4 bg-sky-200 text-base ">
         ℹ️ توجه :  شماره پیش فرض <span className='font-boldl'>09139734679</span>  و کد تایید برای مشاهده پنل ادمین <span className="font-bold">181811</span> می باشد 
        </div>
          <Text_Field
              label="شماره تلفن"
              name="phoneNumber"
              value={value}
              onChange={onChange}
          />
          <div className="flex justify-center">
              {
              getPending ?
                  <Circles  height='50px' color='blue' />
                  :
                  <button type='submit' className='btn wh btn--primary w-full flex justify-center'>
                           ارسال کد تایید
                  </button>
          }
          </div>
          

      </form>
  )
}

export default SendOTPForm