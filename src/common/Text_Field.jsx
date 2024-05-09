import React from 'react'

const Text_Field = ({label,name,value,onChange}) => {
  return (
    <div >
          <label htmlFor={name} className='block mb-4'>{label}</label>
          <input
              className='textField__input'
              type="text"
              name={name}
              id={name}
              value={value}
              onChange={onChange}
          />
    </div>
  )
}

export default Text_Field