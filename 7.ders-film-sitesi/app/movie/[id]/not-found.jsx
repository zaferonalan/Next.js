import Link from 'next/link'
import React from 'react'

const Movie404 = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
        <h1>We couldn find the movie you looking for</h1>
        <Link href="/" className='underline text-[20px] mt-2' >
            Go home
        </Link>
    </div>
  )
}

export default Movie404