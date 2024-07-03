'use client'


const Checkbox_Field = ({ category ,id,checked,name,value,onChange}) => {
  
  return (
    
      <div className='flex items-center gap-x-1'>
        
                <input
                  type='checkbox'
                  className="cursor-pointer  rounded-[5px] border-none bg-secondary-100/80 w-3 h-3 md:w-4 md:h-4 checked:text-primary-900"
                  id={id}
                  checked={checked}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
                <label htmlFor={id} className="cursor-pointer whitespace-nowrap text-sm md:text-lg">
                  {
                  category.title
                  }
                </label>
            
      </div>
    
  );
}

export default Checkbox_Field

