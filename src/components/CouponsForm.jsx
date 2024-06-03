import RadioInput_Field from '@/common/RadioInput_Field';
import Text_Field from '@/common/Text_Field';
import React from 'react'
import Select from 'react-select';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Circles } from 'react-loader-spinner';


const CouponsForm = ({
    formData,
    onFormChange,
    onFormSubmit,
    type,
    setType,
    options,
    setSelectedProducts,
    selectedProducts,
    expireDate,
    setExpireDate,
    isLoading
}) => {
    return (
        <div className="w-full flex justify-center">
            <form className="w-1/2" onSubmit={onFormSubmit}>
                <Text_Field
                    label="کد"
                    name="code"
                    value={formData?.code || ''}
                    onChange={onFormChange}
                />
                <Text_Field
                    label="مقدار"
                    name="amount"
                    value={formData?.amount || ''}
                    onChange={onFormChange}
                />
                <Text_Field
                    label="ظرفیت"
                    name="usageLimit"
                    value={formData?.usageLimit || ''}
                    onChange={onFormChange}
                />
                <div className="flex flex-col mb-6">
                    <span className="blur-0 mb-2">نوع کد تخفیف</span>
                    <div className="flex items-center justify-between">
                        <RadioInput_Field
                        label='درصد'
                        onChange={(e)=>setType(e.target.value)}
                        value='percent'
                        checked={type === 'percent'}
                        name='coupon-type'
                    />
                    <RadioInput_Field
                        label='قیمت ثابت'
                        onChange={(e)=>setType(e.target.value)}
                        value='fixedProduct'
                        checked={type === 'fixedProduct'}
                        name='coupon-type'
                    />
                    </div>
                </div> 
                <div className="flex flex-col mb-6">
                    <label htmlFor="products" className='block mb-2'>شامل محصولات</label>
                    <Select
                    isMulti
                    instanceId='products'
                    className='textField__input'
                    value={selectedProducts}
                    options={options}
                    onChange={setSelectedProducts}
                    getOptionLabel={(option)=>option.title}        
                    getOptionValue={(option)=>option._id}
                />
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="products" className='block mb-2'>تاریخ انقضا </label>
                    <DatePicker 
                        value={expireDate}
                        onChange={(date) => setExpireDate(date)}
                        format="YYYY/MM/DD"
                        calendar={persian}
                        locale={persian_fa}
                        inputClass='textField__input'
                        calendarPosition="bottom-left"
                    />
                </div>
                <div>
                        {isLoading ? (
                            <Circles wrapperStyle={{display:"flex", justifyContent : "center"}}  height='50px' color='blue' />
                        ) : (
                            <button className="btn btn--primary w-full"> تایید</button>
                        )}
                </div>
            </form>
      </div>
  )
}

export default CouponsForm
    
 