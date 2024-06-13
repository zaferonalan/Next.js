import React from 'react'

import MovieContainer from '@/containers/Movie'
import Movie from "@/mocks/movies.json"
import { notFound } from 'next/navigation'

const MoviePage = ({ params, searchParams }) => {
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