import React from 'react'

export default function WidgetTitle({title}:any) {
    return (
        <h3 className=' pb-[18px] mb-[35px] text-[24px] relative  before:absolute before:w-[50px] before:h-[4px] before:bottom-0 before:left-0 before:contents[""] before:bg-[#0D5EF4]  after:absolute after:w-[10px] after:h-[4px] after:bottom-0 after:left-[55px] after:contents[""] after:bg-[#0D5EF4]  '>
            {title}
            <span className='absolute w-[10px] h-[4px] bottom-0 left-[70px] contents[""] bg-[#0D5EF4]'></span>
        </h3>  
    )
}
