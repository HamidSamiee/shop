import Text_Field from '@/common/Text_Field'
import React, { useState } from 'react'
import { Circles } from 'react-loader-spinner'
import Select from 'react-select'
import { TagsInput } from 'react-tag-input-component'

const productsListsTitles = [
    {
        id: 1,
        label:"عنوان",
        name:"title",
      },
    {
        id: 2,
        label: " توضیحات",
        name:"description",
  },
      {
        id:3 ,
        label: "اسلاگ",
        name:"slug",
      },
    {
        id: 4,
        label: "تخفیف",
        name:"discount",
      },
    {
        id: 5,
        label: "برند",
        name:"brand",
      },
    {
        id: 6,
        label: "قیمت",
        name:"price",
      },
    {
        id: 7,
        label: "قیمت با تخفیف ",
        name:"offPrice",
      },
    {
        id: 8,
        label: "موجودی",
        name: "countInStock",
  },
     {
        id: 9,
        label: "لینک عکس محصول",
        name:"imageLink",
      },
]


const ProductForm = ({
    onSubmitProduct,
    value,
    onChange,
    onBlur,
    selectedCategory,
    setSelectedCategory,
    categories,
    tags,
    setTags,
    onClose,
    isProducting,
    btnLabel,
    className
}) => {
 
  return (
    
        <form onSubmit={onSubmitProduct} className={className}>
                        {
                          productsListsTitles.map(item => {
                            return <Text_Field
                                        key={item.id}
                                        label={item.label }
                                        name={item.name }
                                        value={value[item.name] ?? '' }
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                          })
                            }
                          <Select
                            className='mb-5'
                            value={selectedCategory}
                            options={categories}
                            onChange={setSelectedCategory}
                            getOptionLabel={(option)=>option.title}        
                            getOptionValue={(option)=>option._id}
                          />
                          <TagsInput
                              value={tags}
                              onChange={setTags}
                              name="tags"
                              placeHolder="واردکردن تگ ها"
                           /> 
                           <footer className='flex items-center justify-between gap-x-3 mt-5'>
                              {
                                isProducting 
                                ?
                                 <Circles  height='50px' color='blue' />
                                :
                          <button type='submit' className='btn btn--primary'>{btnLabel }</button>
                              }
                              <button onClick={onClose}  className='btn px-4 py-3  badge--error'> لغو </button>
                           </footer>
                    </form>
    
  )
}

export default ProductForm
