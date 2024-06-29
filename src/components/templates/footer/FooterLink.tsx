import Link from 'next/link'
import React from 'react'

export default function FooterLink({href,children}:any) {
    return (
        <Link href={href} className='text-[#b3c1d3] relative mb-[20px] before:absolute before:left-0 before:w-[8px] before:h-[8px] before:bg-[#b3c1d3] pl-[18px] before:rounded-full before:top-1/2 before:-translate-y-1/2'>{children}</Link>
    )
}
