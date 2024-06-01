import React from 'react'

const Blog = ({ params }) => {
    // Dinamik Route
  return (
    <div>Blog Sayfasi: {params.blog}</div>
  )
}

export default Blog