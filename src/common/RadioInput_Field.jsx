import React from 'react'

const RadioInput_Field = ({id,name,value,onChange,checked,label}) => {
  return (
    <div className='flex items-center gap-x-2'>
        <input
                  type='radio'
                  className="cursor-pointer  rounded-[5px] border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
                  id={id}
                  checked={checked}
                  name={name}
                  value={value}
                  onChange={onChange}
        />
                <label htmlFor={id} className="cursor-pointer text-lg">
                  {
                  label
                  }
                </label>
    </div>
  )
}

export default RadioInput_Field