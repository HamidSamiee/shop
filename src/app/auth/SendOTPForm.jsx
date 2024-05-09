import Text_Field from '@/common/Text_Field'
import React from 'react'
import { Circles } from 'react-loader-spinner'

const SendOTPForm = ({value,onChange,onSubmit,isPending}) => {
  return (
      <form className='space-y-10' onSubmit={onSubmit}>
          <Text_Field
              label="شماره تلفن"
              name="phoneNumber"
              value={value}
              onChange={onChange}
          />
          <div className="flex justify-center">
              {
              isPending ?
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