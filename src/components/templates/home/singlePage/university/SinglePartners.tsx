import Image from 'next/image'
import React from 'react'
import { Client1,Client2,Client3,Client4,Client5,Client6 } from '@/components/atom'
import Link from 'next/link'

export default function SinglePartners({src}:any) {
  return (
    <div className=' w-[25%] px-[12px] mt-[40px] flex justify-center items-center'>
        <Link  href='' className='relative'>
        {/* <span className=' absolute top-0 left-0 w-full h-full bg-[#d4c7c757]'></span> */}
            <Image src={src} alt='' width={70} height={70}  className='md:w-[100px] opacity-35 hover:opacity-100 transition-all'/>
        </Link>
    </div>
  )
}
