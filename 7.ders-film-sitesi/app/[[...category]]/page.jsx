import React from 'react'
import HomeContainer from '@/containers/Home'

import Movies from "@/mocks/movies.json"

const delay = async(ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const HomePage = async({ params }) => {
    await delay(20000)

    let selectedCategory

    if (params.category?.length > 0) {
        selectedCategory = true
    }
  return (
    <HomeContainer
        selectedCategory = {{
            id: params.category?.[0] ?? "",
            movies: selectedCategory ? Movies.result.slice(0, 7) : []
        }}
    />
  )
}

export default HomePage