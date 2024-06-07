import React from 'react'

export const getAllPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/posts")
    return res.json()
} 

export const getSinglePost = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/posts/${id}`)
    return res.json()
}


const BlogPage = async({ params }) => {
    console.log("Inside the page: ", params.id)
    const data = await getAllPosts(params.id)
  
    return (
    <>
        <h1>Title: {data.title}</h1>
    </>
  )
}

export default BlogPage

export const generateStaticParams = async() => {
    console.log(" Inside generateStaticParams ")
    const post = await getAllPosts()

    return post.map((post) => ({ id: `${post.id}`}))
}