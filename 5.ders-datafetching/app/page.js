import React from 'react'

export const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  return response.json()
} 

const HomePage = async() => {
  const data = await getData()
  console.log(data)
  return (
    <div>Data fetching</div>
  )
}

export default HomePage