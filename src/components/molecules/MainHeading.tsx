import React from 'react'

export default function MainHeading({children,className}:any) {
    return (
        <h2 className={`mb-[32px] text-[28px] lg:text-[36px] font-bold ${className}`}>
            {children}
        </h2>
    )
}
