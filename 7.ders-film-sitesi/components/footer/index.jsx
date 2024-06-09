import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center'>
       Made with ❤ by 
        <Link className='underline' href="https://twitter.com">
            Zafer Günay Önalan
        </Link>
    </footer>
  )
}

export default Footer