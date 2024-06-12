import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-custom-gradient grid-templates fluid' >
        <div className='flex items-center justify-between'>
            <Link href="/" className='flex items-center gap-2 text-[24px] font-[700] text-gray-300'>
                <FaPlayCircle />NETFILMS
            </Link>
            <nav className='flex gap-12 text-gray-300 font-[700]'>
                <Link href="/" >Movies</Link>
                <Link href="/" >Series</Link>
                <Link href="/" >Kids</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header