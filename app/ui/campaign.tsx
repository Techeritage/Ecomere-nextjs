import React from 'react'

export default function Campaign({name}:{name: string}) {
  return (
    <div className='px-[3%] md:px-[10%] mt-[50px]'>
      <div>
        <p className='font-semibold text-gray-800 mb-5'>{name} (10)</p>
      </div>
      <div className='bg-[#f4f4f4] w-full h-[220px]'>
        
      </div>
    </div>
  )
}
