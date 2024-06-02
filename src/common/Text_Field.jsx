import React from 'react'

const Text_Field = ({label,name,value,onChange,onBlur,type,register = ()=>{}}) => {
  return (
    <div >
          <label htmlFor={name} className='block mb-4 '>{label}</label>
          <input
              className='textField__input mb-6'
              type={type || 'text'}
              name={name}
              id={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...register(name)}
          />
    </div>
  )
}

export default Text_Field