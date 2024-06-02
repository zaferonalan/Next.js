import React from 'react'

const Blog = ({ params }) => {
    // Dinamik Route
    console.log(params)
  return (
    <div>Blog Sayfasi: {params.blog}</div>
  )
}

export default Blog