import React from 'react'
import { ptSans } from './fonts'

export default function Campaign({name}:{name: string}) {
  return (
    <div className='px-[3%] md:px-[10%] pt-[20px] border-t'>
      <div>
        <p className={`${ptSans.className} font-bold text-xl md:text-2xl tracking-wide text-gray-800 mb-5`}>{name}</p>
      </div>
      <div className='bg-[#f4f4f4] w-full h-[220px]'>
        
      </div>
    </div>
  )
}
