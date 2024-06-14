import React from 'react'

import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

const loading = () => {
  return (
    <div>
        <FeatureMovieLoading/>
        <CategoriesLoading />
        <MoviesSectionLoading />
        <MoviesSectionLoading />
        <MoviesSectionLoading />
    </div>
  )
}

export default loading