import React from 'react'

import MovieContainer from '@/containers/Movie'
import Movie from "@/mocks/movies.json"
import { notFound } from 'next/navigation'

const delay = async(ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const MoviePage = async({ params, searchParams }) => {

    await delay(2000)

    const movieDetail = Movie.results.find(
        (movie) => movie.id.toString() === params.id
    )
    if (!movieDetail) {
        notFound()
    }

    if (searchParams.error === "true") {
        throw new Error("Error happend")
    }
    return (
    <MovieContainer movie={movieDetail} />
  )
}

export default MoviePage