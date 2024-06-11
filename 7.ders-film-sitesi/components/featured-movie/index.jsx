import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const FeaturedMovie = ({ movie ={}, isCompact = true }) => {
    const { poster_path, title, overview } = movie
  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
        <h1 className="text-[72px] uppercase max-w-10 font-[900] leading-[72px]">{title}</h1>
        <p className={`text-[24px] max-w-20 ${isCompact ? `overflow-hidden`: ""}`}>
            {overview}
        </p>
        <div className="flex gap-3">
            <Link className='flex items-center justify-center text-gray-500 w-[300px] rounded-[999px] text-[20px] font-[700]' href={`/movie/${movie.id}`}>
                Play
            </Link>
            <button className='flex items-center justify-center border-2 border-solid text-white w-[62px] h-[62px] border-red-500 rounded-[999px]'>
                <FaPlus/>
            </button>
        </div>
        <div className="!h-auto -z-[2] max-h-screen object-cover">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-moviePoster-gradient -z-[1]"></div>
            <Image 
                className="!h-auto -z-[2] max-h-screen object-cover"
                unoptimized
                src={`https://image.tmdb.org/t/p/orginals${poster_path}`}
                alt={title}
                fill
            />
        </div>
    </div>
    
  )
}

export default FeaturedMovie