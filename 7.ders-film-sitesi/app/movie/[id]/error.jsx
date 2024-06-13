'use client'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
        <h1>An error has occurred. Sorry for that!</h1>
        <Link href="/" className='underline text-[20px] mt-2' >
            Go home
        </Link>
    </div>
  )
}

export default ErrorPage