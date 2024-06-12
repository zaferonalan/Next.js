import React from 'react'
import Link from 'next/link'
const Categories = ({ categories }) => {
  return (
    <div className='flex h-[72px] gap-6'>
        {categories.map((category) => (
            <Link
                className='flex items-center justify-center bg-black/[0.75] border-solid border border-[#333] 
                    shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] w-full h-full rounded-[6px] font-[700]'
                key={category.id}
                href={`/${category.id}`}
            >
                <div className=''>{category.name}</div>
            </Link>
        ))}
    </div>
  )
}

export default Categories